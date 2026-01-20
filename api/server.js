// Stripe Backend Server
// Handles secure server-side Stripe operations

// Load environment variables FIRST, before anything else
require('dotenv').config();

// Verify Stripe secret key is loaded
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ ERROR: STRIPE_SECRET_KEY is not set in environment variables!');
  console.error('Please make sure you have a .env file in the api/ folder with:');
  console.error('STRIPE_SECRET_KEY=sk_test_...');
  process.exit(1);
}

const express = require('express');
const cors = require('cors');

// Initialize Stripe AFTER dotenv loads
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Telegram notifications
const { sendAppointmentNotification, sendPaymentNotification } = require('./utils/telegram');

// Track notified sessions to prevent duplicates
const notifiedSessions = new Set();

const app = express();

// Enable CORS for your frontend
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
console.log(`🔐 CORS configured for: ${frontendUrl}`);
app.use(cors({
  origin: frontendUrl,
  credentials: true
}));

// Request logging middleware
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    console.log(`📨 ${req.method} ${req.path} - ${new Date().toISOString()}`);
  }
  next();
});

// JSON body parser (for regular endpoints)
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Stripe backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint (alternative)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Stripe backend server is running' 
  });
});

// Verify payment and send notification endpoint
app.post('/api/verify-payment', async (req, res) => {
  const requestId = Date.now().toString(36);
  console.log(`\n💰 [${requestId}] Payment verification request received`);
  console.log(`💰 [${requestId}] Request body:`, JSON.stringify(req.body, null, 2));
  
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      console.error(`❌ [${requestId}] Session ID is missing`);
      return res.status(400).json({ 
        success: false,
        message: 'Session ID is required',
        requestId
      });
    }

    console.log(`🔍 [${requestId}] Retrieving Stripe session: ${sessionId}`);
    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log(`✅ [${requestId}] Session retrieved. Payment status: ${session.payment_status}`);

    // Only send notification if payment was successful
    if (session.payment_status === 'paid') {
      // Check if we've already sent a notification for this session
      // (to avoid duplicate notifications on page refresh)
      if (notifiedSessions.has(sessionId)) {
        console.log('ℹ️ Payment notification already sent for session:', sessionId);
        return res.json({ 
          success: true,
          paymentStatus: 'paid',
          amount: session.amount_total,
          currency: session.currency,
          notificationSent: false,
          alreadyNotified: true
        });
      }

      // Mark as notified BEFORE sending (to prevent race conditions)
      notifiedSessions.add(sessionId);
      
      // Send payment notification
      const notificationSent = await sendPaymentNotification({
        amount: session.amount_total,
        currency: session.currency,
        sessionId: session.id,
        customerEmail: session.customer_details?.email
      });

      if (notificationSent) {
        console.log('✅ Payment notification sent for session:', sessionId);
      } else {
        console.warn('⚠️ Failed to send payment notification for session:', sessionId);
        // Remove from set if notification failed (so it can be retried)
        notifiedSessions.delete(sessionId);
      }

      res.json({ 
        success: true,
        paymentStatus: 'paid',
        amount: session.amount_total,
        currency: session.currency,
        notificationSent
      });
    } else {
      res.json({ 
        success: false,
        paymentStatus: session.payment_status,
        message: 'Payment not completed'
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ 
      message: error.message || 'Failed to verify payment' 
    });
  }
});

// Appointment submission endpoint
app.post('/api/appointment', async (req, res) => {
  const requestId = Date.now().toString(36);
  const timestamp = new Date().toISOString();
  
  console.log(`\n📥 [${requestId}] Appointment request received at ${timestamp}`);
  console.log(`📥 [${requestId}] Request origin: ${req.headers.origin || 'N/A'}`);
  console.log(`📥 [${requestId}] Request IP: ${req.ip || req.connection.remoteAddress || 'N/A'}`);
  console.log(`📥 [${requestId}] Request body:`, JSON.stringify(req.body, null, 2));
  
  try {
    const { fname, lname, email, phone, date, time, message } = req.body;

    // Validate required fields
    if (!fname || !lname || !email) {
      console.error(`❌ [${requestId}] Validation failed: Missing required fields`);
      console.error(`❌ [${requestId}] Received:`, { fname: !!fname, lname: !!lname, email: !!email });
      return res.status(400).json({ 
        success: false,
        message: 'First name, last name, and email are required',
        requestId
      });
    }

    console.log(`✅ [${requestId}] Validation passed`);
    console.log(`📤 [${requestId}] Sending Telegram notification...`);

    // Send Telegram notification
    const notificationSent = await sendAppointmentNotification({
      fname,
      lname,
      email,
      phone,
      date,
      time,
      message
    });

    if (notificationSent) {
      console.log(`✅ [${requestId}] Telegram notification sent successfully`);
    } else {
      console.warn(`⚠️ [${requestId}] Failed to send Telegram notification`);
      console.warn(`⚠️ [${requestId}] Checking Telegram configuration...`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_BOT_TOKEN: ${process.env.TELEGRAM_BOT_TOKEN ? 'SET' : 'NOT SET'}`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_CHAT_ID: ${process.env.TELEGRAM_CHAT_ID || 'NOT SET'}`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_APPOINTMENT_TOPIC_ID: ${process.env.TELEGRAM_APPOINTMENT_TOPIC_ID || 'NOT SET'}`);
    }

    console.log(`✅ [${requestId}] Appointment processed successfully`);
    res.json({ 
      success: true,
      message: 'Appointment submitted successfully',
      notificationSent,
      requestId
    });
  } catch (error) {
    console.error(`❌ [${requestId}] Error processing appointment:`, error);
    console.error(`❌ [${requestId}] Error name:`, error.name);
    console.error(`❌ [${requestId}] Error message:`, error.message);
    console.error(`❌ [${requestId}] Error stack:`, error.stack);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to process appointment',
      requestId,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Stripe Webhook endpoint for payment completion
// Note: This endpoint requires raw body, so it's handled separately
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Only verify webhook if secret is set
    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } else {
      // In development, parse JSON directly
      event = JSON.parse(req.body.toString());
    }
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Send payment notification with customer email
    sendPaymentNotification({
      amount: session.amount_total,
      currency: session.currency,
      sessionId: session.id,
      customerEmail: session.customer_details?.email
    }).catch(err => {
      console.error('Failed to send payment notification:', err);
    });
  }

  res.json({ received: true });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const requestId = Date.now().toString(36);
  const timestamp = new Date().toISOString();
  
  console.log(`\n📧 [${requestId}] Contact form request received at ${timestamp}`);
  console.log(`📧 [${requestId}] Request origin: ${req.headers.origin || 'N/A'}`);
  console.log(`📧 [${requestId}] Request IP: ${req.ip || req.connection.remoteAddress || 'N/A'}`);
  console.log(`📧 [${requestId}] Request body:`, JSON.stringify(req.body, null, 2));
  
  try {
    const { fname, lname, email, phone, message } = req.body;

    // Validate required fields
    if (!fname || !lname || !email) {
      console.error(`❌ [${requestId}] Validation failed: Missing required fields`);
      console.error(`❌ [${requestId}] Received:`, { fname: !!fname, lname: !!lname, email: !!email });
      return res.status(400).json({ 
        success: false,
        message: 'First name, last name, and email are required',
        requestId
      });
    }

    console.log(`✅ [${requestId}] Validation passed`);
    console.log(`📤 [${requestId}] Sending Telegram notification...`);

    // Send Telegram notification (using appointment notification format)
    const notificationSent = await sendAppointmentNotification({
      fname,
      lname,
      email,
      phone: phone || 'Not provided',
      date: 'N/A',
      time: 'N/A',
      message: message || 'No message provided'
    });

    if (notificationSent) {
      console.log(`✅ [${requestId}] Telegram notification sent successfully`);
    } else {
      console.warn(`⚠️ [${requestId}] Failed to send Telegram notification`);
      console.warn(`⚠️ [${requestId}] Checking Telegram configuration...`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_BOT_TOKEN: ${process.env.TELEGRAM_BOT_TOKEN ? 'SET' : 'NOT SET'}`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_CHAT_ID: ${process.env.TELEGRAM_CHAT_ID || 'NOT SET'}`);
      console.warn(`⚠️ [${requestId}] TELEGRAM_APPOINTMENT_TOPIC_ID: ${process.env.TELEGRAM_APPOINTMENT_TOPIC_ID || 'NOT SET'}`);
    }

    console.log(`✅ [${requestId}] Contact form processed successfully`);
    res.json({ 
      success: true,
      message: 'Contact form submitted successfully',
      notificationSent,
      requestId
    });
  } catch (error) {
    console.error(`❌ [${requestId}] Error processing contact form:`, error);
    console.error(`❌ [${requestId}] Error name:`, error.name);
    console.error(`❌ [${requestId}] Error message:`, error.message);
    console.error(`❌ [${requestId}] Error stack:`, error.stack);
    res.status(500).json({ 
      success: false,
      message: error.message || 'Failed to process contact form',
      requestId,
      error: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  const requestId = Date.now().toString(36);
  console.log(`\n💳 [${requestId}] Checkout session creation request received`);
  console.log(`💳 [${requestId}] Request origin: ${req.headers.origin || 'N/A'}`);
  console.log(`💳 [${requestId}] Request body:`, JSON.stringify(req.body, null, 2));
  
  try {
    const { amount, currency = 'usd' } = req.body;

    // Validate amount
    if (!amount || amount < 50) { // Minimum $0.50
      console.error(`❌ [${requestId}] Invalid amount: ${amount}`);
      return res.status(400).json({ 
        success: false,
        message: 'Amount must be at least $0.50',
        requestId
      });
    }

    console.log(`✅ [${requestId}] Amount validated: ${amount} ${currency}`);

    // Get origin from request headers for redirect URLs
    // In development, use the frontend URL directly
    // In production, you may need to handle base paths (e.g., /Hipno_Template/)
    const origin = req.headers.origin || process.env.FRONTEND_URL || 'http://localhost:5173';
    
    // Build the redirect URLs
    // Redirect to dedicated thank-you page on success
    // In development, base path is empty, so just use /thank-you
    // In production with GitHub Pages, you might need /Hipno_Template/thank-you
    const basePath = process.env.BASE_PATH || '';
    const successPath = basePath ? `${basePath}/thank-you` : '/thank-you';
    const cancelPath = basePath ? `${basePath}/donations?canceled=true` : '/donations?canceled=true';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'Donation',
              description: 'Thank you for your support',
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}${successPath}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${cancelPath}`,
      metadata: {
        donation: 'true',
      },
    });

    // Don't send notification here - wait for webhook to get customer email
    // Payment notification will be sent via webhook when payment is completed

    // Return both sessionId and url for compatibility
    // Modern approach: use url for direct redirect
    res.json({ 
      sessionId: session.id,
      url: session.url 
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      message: error.message || 'Failed to create checkout session' 
    });
  }
});

// Log environment configuration on startup
console.log('\n🔧 Environment Configuration:');
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'NOT SET'}`);
console.log(`   PORT: ${process.env.PORT || 'NOT SET'}`);
console.log(`   FRONTEND_URL: ${process.env.FRONTEND_URL || 'NOT SET'}`);
console.log(`   BASE_PATH: ${process.env.BASE_PATH || 'NOT SET (empty)'}`);
console.log(`   STRIPE_SECRET_KEY: ${process.env.STRIPE_SECRET_KEY ? 'SET (' + process.env.STRIPE_SECRET_KEY.substring(0, 20) + '...)' : 'NOT SET'}`);
console.log(`   STRIPE_WEBHOOK_SECRET: ${process.env.STRIPE_WEBHOOK_SECRET ? 'SET' : 'NOT SET'}`);
console.log(`   TELEGRAM_BOT_TOKEN: ${process.env.TELEGRAM_BOT_TOKEN ? 'SET (' + process.env.TELEGRAM_BOT_TOKEN.substring(0, 10) + '...)' : 'NOT SET'}`);
console.log(`   TELEGRAM_CHAT_ID: ${process.env.TELEGRAM_CHAT_ID || 'NOT SET'}`);
console.log(`   TELEGRAM_APPOINTMENT_TOPIC_ID: ${process.env.TELEGRAM_APPOINTMENT_TOPIC_ID || 'NOT SET'}`);
console.log(`   TELEGRAM_PAYMENT_CHAT_ID: ${process.env.TELEGRAM_PAYMENT_CHAT_ID || 'NOT SET'}`);
console.log(`   TELEGRAM_PAYMENT_TOPIC_ID: ${process.env.TELEGRAM_PAYMENT_TOPIC_ID || 'NOT SET (empty)'}`);
console.log('');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Stripe backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`📡 CORS enabled for: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log('');
});
