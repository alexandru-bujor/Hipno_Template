import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const ProgramarePreview = () => {
  const { t } = useLanguage()
  return (
    <div id="programare" className="cta-section" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box">
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">{t('programare.title')}</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t('programare.subtitle')}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {t('programare.description')}
                  </p>
                </div>
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/programare" className="btn-default">
                    {t('programare.button')}
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

export default ProgramarePreview

