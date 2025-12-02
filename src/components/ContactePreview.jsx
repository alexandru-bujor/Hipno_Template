import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const ContactePreview = () => {
  const { t } = useLanguage()
  return (
    <div id="contacte" className="cta-section" style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box">
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">{t('contacte.title')}</h3>
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

