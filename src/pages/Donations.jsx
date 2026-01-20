import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useLanguage } from '../contexts/LanguageContext'
import { loadStripe } from '@stripe/stripe-js'

const Donations = () => {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [cancelMessage, setCancelMessage] = useState('')

  // Get Stripe publishable key from environment variable
  // Fallback to the key directly if env var not loaded (for development)
  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  // Get API endpoint - works with serverless functions (Vercel/Netlify) or custom backend
  // For serverless: /api/create-checkout-session (Vercel) or /.netlify/functions/create-checkout-session (Netlify)
  // For local backend: http://localhost:3000/api/create-checkout-session
  // Hardcode the local backend URL for development (environment variables may not load in Vite)
  const apiEndpoint = import.meta.env.VITE_STRIPE_API_ENDPOINT || 'http://localhost:3000/api/create-checkout-session'
  
  // Ensure it's always a full URL (not relative)
  const getFullEndpoint = () => {
    const endpoint = apiEndpoint || 'http://localhost:3000/api/create-checkout-session'
    if (!endpoint) {
      return 'http://localhost:3000/api/create-checkout-session'
    }
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      return endpoint
    }
    // If it's a relative path, prepend the backend URL
    return `http://localhost:3000${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`
  }
  
  // Handle success/cancel query parameters from Stripe redirect
  useEffect(() => {
    const success = searchParams.get('success')
    const canceled = searchParams.get('canceled')
    
    if (success === 'true') {
      setSuccessMessage(t('donations.successMessage') || 'Thank you for your donation! Your payment was successful.')
      setError('')
      setCancelMessage('')
      // Clear the query parameter after showing the message
      setTimeout(() => {
        setSearchParams({}, { replace: true })
      }, 5000)
    }
    
    if (canceled === 'true') {
      setCancelMessage(t('donations.cancelMessage') || 'Your payment was canceled. You can try again anytime.')
      setError('')
      setSuccessMessage('')
      // Clear the query parameter after showing the message
      setTimeout(() => {
        setSearchParams({}, { replace: true })
      }, 5000)
    }
  }, [searchParams, setSearchParams, t])

  // Debug: Log the endpoint and key being used (remove in production)
  useEffect(() => {
    const fullEndpoint = getFullEndpoint()
    console.log('🔍 API Endpoint (raw):', apiEndpoint)
    console.log('🔍 API Endpoint (full):', fullEndpoint)
    console.log('🔍 Env variable (endpoint):', import.meta.env.VITE_STRIPE_API_ENDPOINT)
    console.log('🔑 Stripe Key loaded:', stripePublishableKey ? `${stripePublishableKey.substring(0, 20)}...` : 'MISSING!')
    console.log('🔑 Env variable (key):', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ? `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY.substring(0, 20)}...` : 'NOT LOADED')
  }, [apiEndpoint, stripePublishableKey])

  const presetAmounts = [50, 100, 250, 500, 1000]

  const handleAmountSelect = (value) => {
    setAmount(value.toString())
    setCustomAmount('')
    setError('')
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    setAmount('')
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const donationAmount = customAmount || amount
    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      setError(t('donations.errors.invalidAmount'))
      return
    }

    setIsLoading(true)

    try {
      // Get the full endpoint URL (always use absolute URL)
      const endpoint = getFullEndpoint()
      
      console.log('🚀 Making request to:', endpoint)
      console.log('💰 Donation amount:', donationAmount, 'cents:', Math.round(parseFloat(donationAmount) * 100))
      
      // Call backend API to create checkout session
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(parseFloat(donationAmount) * 100), // Convert to cents
          currency: 'usd', // You can make this configurable
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create checkout session' }))
        throw new Error(errorData.message || 'Failed to create checkout session')
      }

      const { sessionId, url } = await response.json()

      // Modern approach: Redirect directly to the checkout URL
      // This is the recommended way in newer versions of Stripe.js
      if (url) {
        window.location.href = url
        return // Don't set loading to false, we're redirecting
      }

      // Fallback: If URL is not provided, use the old method (for older Stripe versions)
      if (!stripePublishableKey || stripePublishableKey.trim() === '') {
        throw new Error('Stripe publishable key is not configured. Please check your environment variables.')
      }

      // Initialize Stripe (fallback only)
      const stripe = await loadStripe(stripePublishableKey)
      if (!stripe) {
        throw new Error('Stripe failed to load')
      }

      // Fallback: Try redirectToCheckout if URL method didn't work
      // Note: This may not work in newer Stripe.js versions
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (stripeError) {
        throw new Error(stripeError.message)
      }
    } catch (err) {
      console.error('Error creating checkout session:', err)
      setError(err.message || t('donations.errors.generic'))
      setIsLoading(false)
    }
  }

  return (
    <>

      
      <section className="donations-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="donations-content text-center mb-5">
                <h2 className="mb-3">{t('donations.heading')}</h2>
                <p className="lead">{t('donations.description')}</p>
              </div>

              <div className="donations-form-wrapper">
                <form onSubmit={handleSubmit} className="donations-form">
                  {/* Preset Amount Buttons */}
                  <div className="preset-amounts mb-4">
                    <label className="form-label mb-3">{t('donations.selectAmount')}</label>
                    <div className="preset-buttons d-flex flex-wrap gap-3 justify-content-center">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                            type="button"
                            className={`btn btn-outline-primary preset-btn ${amount === preset.toString() ? 'active' : ''}`}
                            onClick={() => handleAmountSelect(preset)}
                            style={{
                              minWidth: '100px',
                              padding: '12px 24px',
                              fontSize: '16px',
                              fontWeight: 600,
                              border: '2px solid',
                              borderRadius: '8px',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            ${preset}
                          </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div className="custom-amount mb-4">
                    <label htmlFor="customAmount" className="form-label">
                      {t('donations.customAmount')}
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        id="customAmount"
                        className="form-control"
                        placeholder={t('donations.amountPlaceholder')}
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        min="1"
                        step="0.01"
                        style={{
                          fontSize: '18px',
                          padding: '12px 16px',
                        }}
                      />
                    </div>
                  </div>

                  {/* Success Message */}
                  {successMessage && (
                    <div className="alert alert-success" role="alert" style={{ marginBottom: '20px' }}>
                      <strong>✓ {t('donations.success') || 'Success!'}</strong><br />
                      {successMessage}
                    </div>
                  )}

                  {/* Cancel Message */}
                  {cancelMessage && (
                    <div className="alert alert-warning" role="alert" style={{ marginBottom: '20px' }}>
                      <strong>⚠ {t('donations.canceled') || 'Payment Canceled'}</strong><br />
                      {cancelMessage}
                    </div>
                  )}

                  {/* Error Message */}
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-default"
                      disabled={isLoading || (!amount && !customAmount)}
                      style={{
                        minWidth: '200px',
                        padding: '14px 32px',
                        fontSize: '18px',
                        fontWeight: 600,
                      }}
                    >
                      {isLoading ? t('donations.processing') : t('donations.donateButton')}
                    </button>
                  </div>

                  {/* Info Text */}
                  <div className="donations-info mt-4 text-center">
                    <p className="text-muted small">
                      {t('donations.securityNote')}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donations
