# Stripe Donations Setup Guide

This guide explains how to set up the backend API endpoint for Stripe Checkout donations.

## Frontend Configuration

The donations page uses environment variables for configuration. Create a `.env` file in the root directory:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
VITE_STRIPE_API_ENDPOINT=https://your-backend-url.com/api/create-checkout-session
```

For production, use your production Stripe keys:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
VITE_STRIPE_API_ENDPOINT=https://your-backend-url.com/api/create-checkout-session
```

## Backend API Endpoint

You need to create a backend endpoint that creates a Stripe Checkout Session. Here's an example implementation:

### Node.js/Express Example

```javascript
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { amount, currency = 'usd' } = req.body;

    // Validate amount
    if (!amount || amount < 50) { // Minimum $0.50
      return res.status(400).json({ 
        message: 'Amount must be at least $0.50' 
      });
    }

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
      success_url: `${req.headers.origin}/donations?success=true`,
      cancel_url: `${req.headers.origin}/donations?canceled=true`,
      metadata: {
        donation: 'true',
      },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      message: error.message || 'Failed to create checkout session' 
    });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### Python/Flask Example

```python
from flask import Flask, request, jsonify
import stripe
import os

app = Flask(__name__)
stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')

@app.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        data = request.json
        amount = data.get('amount')
        currency = data.get('currency', 'usd')
        
        # Validate amount
        if not amount or amount < 50:  # Minimum $0.50
            return jsonify({'message': 'Amount must be at least $0.50'}), 400
        
        # Create Checkout Session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': currency,
                    'product_data': {
                        'name': 'Donation',
                        'description': 'Thank you for your support',
                    },
                    'unit_amount': amount,  # Amount in cents
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url=request.headers.get('Origin') + '/donations?success=true',
            cancel_url=request.headers.get('Origin') + '/donations?canceled=true',
            metadata={
                'donation': 'true',
            },
        )
        
        return jsonify({'sessionId': session.id})
    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3001)
```

### PHP Example

```php
<?php
require_once 'vendor/autoload.php';

\Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $amount = $input['amount'] ?? 0;
    $currency = $input['currency'] ?? 'usd';
    
    // Validate amount
    if ($amount < 50) {
        http_response_code(400);
        echo json_encode(['message' => 'Amount must be at least $0.50']);
        exit;
    }
    
    try {
        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => $currency,
                    'product_data' => [
                        'name' => 'Donation',
                        'description' => 'Thank you for your support',
                    ],
                    'unit_amount' => $amount,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $_SERVER['HTTP_ORIGIN'] . '/donations?success=true',
            'cancel_url' => $_SERVER['HTTP_ORIGIN'] . '/donations?canceled=true',
            'metadata' => [
                'donation' => 'true',
            ],
        ]);
        
        echo json_encode(['sessionId' => $session->id]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => $e->getMessage()]);
    }
}
?>
```

## Environment Variables for Backend

Your backend needs the following environment variable:

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

For production:
```env
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
```

## CORS Configuration

Make sure your backend allows CORS requests from your frontend domain. For Express:

```javascript
const cors = require('cors');
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

## Testing

1. Use Stripe test mode keys (starting with `pk_test_` and `sk_test_`)
2. Use test card numbers from [Stripe Testing](https://stripe.com/docs/testing)
3. Test successful payment: `4242 4242 4242 4242`
4. Test declined payment: `4000 0000 0000 0002`

## Security Notes

- Never expose your Stripe secret key in the frontend
- Always validate amounts on the backend
- Use HTTPS in production
- Implement rate limiting to prevent abuse
- Consider adding additional validation (email, etc.) if needed

## Next Steps

1. Get your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Set up your backend endpoint using one of the examples above
3. Configure environment variables in both frontend and backend
4. Test the donation flow
5. Deploy and switch to production keys
