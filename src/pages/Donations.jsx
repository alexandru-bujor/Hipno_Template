import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { useLanguage } from '../contexts/LanguageContext'
import { loadStripe } from '@stripe/stripe-js'

const Donations = () => {
  const { t } = useLanguage()
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Get Stripe publishable key from environment variable
  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ''
  // Get backend API endpoint from environment variable
  const apiEndpoint = import.meta.env.VITE_STRIPE_API_ENDPOINT || '/api/create-checkout-session'

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
      // Call backend API to create checkout session
      const response = await fetch(apiEndpoint, {
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

      const { sessionId } = await response.json()

      // Initialize Stripe
      const stripe = await loadStripe(stripePublishableKey)
      if (!stripe) {
        throw new Error('Stripe failed to load')
      }

      // Redirect to Stripe Checkout
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
      <PageHeader 
        title={t('donations.title')}
        subtitle={t('donations.subtitle')}
      />
      
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
