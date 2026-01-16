import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const ContactePreview = () => {
  const { t } = useLanguage()
  return (
    <div 
      id="contacte" 
      className="cta-section" 
      style={{
          paddingTop: 0,
          paddingBottom: '25px',
      }}
    >
      <div className="container" style={{ height: '300px' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box cta-box-no-image"  style={{ height: '300px' }}>
              <div className="cta-box-content">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t('contacte.subtitle')}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {t('contacte.description')}
                  </p>
                </div>
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/contacte" className="btn-default">
                    {t('contacte.button')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactePreview

