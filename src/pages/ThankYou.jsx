import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { useLanguage } from '../contexts/LanguageContext'

const ThankYou = () => {
  const { t } = useLanguage()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [paymentVerified, setPaymentVerified] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Verify payment and send notification when session_id is present
    if (sessionId) {
      verifyPayment(sessionId)
    }
  }, [sessionId])

  const verifyPayment = async (sessionId) => {
    try {
      const apiEndpoint = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000'
      const response = await fetch(`${apiEndpoint}/api/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })

      const data = await response.json()
      
      if (data.success && data.paymentStatus === 'paid') {
        setPaymentVerified(true)
        console.log('✅ Payment verified and notification sent')
      } else {
        console.warn('⚠️ Payment not verified:', data.message)
      }
    } catch (error) {
      console.error('Error verifying payment:', error)
      // Don't show error to user, just log it
    }
  }

  return (
    <>
      <PageHeader 
        title={t('thankYou.title')}
        subtitle={t('thankYou.subtitle')}
      />
      
      <section className="thank-you-section" style={{ padding: '80px 0', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="thank-you-content text-center">
                {/* Success Icon */}
                <div className="thank-you-icon mb-4" style={{ fontSize: '80px', color: '#28a745' }}>
                  ✓
                </div>
                
                {/* Main Message */}
                <h2 className="mb-4" style={{ color: '#2c3e50', fontWeight: 600 }}>
                  {t('thankYou.heading')}
                </h2>
                
                <p className="lead mb-4" style={{ fontSize: '18px', color: '#555' }}>
                  {t('thankYou.message')}
                </p>
                
                {/* Additional Info */}
                <div className="thank-you-details mb-5">
                  <p style={{ color: '#777', marginBottom: '10px' }}>
                    {t('thankYou.receiptInfo')}
                  </p>
                  {sessionId && (
                    <p style={{ color: '#999', fontSize: '14px', fontFamily: 'monospace' }}>
                      {t('thankYou.sessionId')}: {sessionId}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="thank-you-actions d-flex flex-wrap gap-3 justify-content-center">
                  <Link 
                    to="/" 
                    className="btn-default"
                    style={{
                      padding: '15px 40px',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    {t('thankYou.backToHome')}
                  </Link>
                  
                  <Link 
                    to="/donations" 
                    className="btn-default"
                    style={{
                      padding: '15px 40px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      border: '2px solid #2c3e50',
                      color: '#2c3e50'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2c3e50'
                      e.target.style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent'
                      e.target.style.color = '#2c3e50'
                    }}
                  >
                    {t('thankYou.makeAnotherDonation')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ThankYou
