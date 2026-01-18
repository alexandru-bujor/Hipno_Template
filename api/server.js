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
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

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
  try {
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ 
        message: 'Session ID is required' 
      });
    }

    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

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
  try {
    const { fname, lname, email, phone, date, time, message } = req.body;

    // Validate required fields
    if (!fname || !lname || !email) {
      return res.status(400).json({ 
        message: 'First name, last name, and email are required' 
      });
    }

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

    if (!notificationSent) {
      console.warn('⚠️ Failed to send Telegram notification, but appointment was recorded');
    }

    res.json({ 
      success: true,
      message: 'Appointment submitted successfully',
      notificationSent
    });
  } catch (error) {
    console.error('Error processing appointment:', error);
    res.status(500).json({ 
      message: error.message || 'Failed to process appointment' 
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

// Create Stripe Checkout Session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    // Validate amount
    if (!amount || amount < 50) { // Minimum $0.50
      return res.status(400).json({ 
        message: 'Amount must be at least $0.50' 
      });
    }

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Stripe backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔑 Stripe secret key loaded: ${process.env.STRIPE_SECRET_KEY.substring(0, 20)}...`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});
