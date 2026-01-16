import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import { useLanguage } from '../contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        backgroundImage="assets/images/hero-images/AdobeStock_1013238345.jpeg"
      />
      
      <div className="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-content">
                
                {/* Introduction */}
                <div className="services-section services-main-title">
                  <p className="services-intro-text" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px', fontStyle: 'italic' }}>
                    {t('services.nameTitle')}
                  </p>
                  <p className="services-intro-text" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                    {t('services.greeting')}
                  </p>
                  <p className="services-intro-text" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                    {t('services.intro2')}
                  </p>
                  <p className="services-intro-text" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
                    {t('services.intro3')}
                  </p>
                </div>

                {/* Drumul meu */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="1">{t('services.myPath')}</h2>
                  <p>{t('services.myPath1')}</p>
                  <p>{t('services.myPath2')}</p>
                  <p>{t('services.myPath3')}</p>
                </div>

                {/* Link to What I Work With page */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="2">{t('services.whatIWorkWith')}</h2>
                  <p>{t('services.whatIWorkWithDesc')}</p>
                  <p style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <Link to="/whatwedo" className="btn-default" style={{ 
                      display: 'inline-block',
                      padding: '15px 40px',
                      textDecoration: 'none',
                        textAlign: 'center'
                    }}>
                      {t('services.discoverServices')}
                    </Link>
                  </p>
                </div>

                {/* Misiunea mea */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="3">{t('services.myMission')}</h2>
                  <p>{t('services.mission1')}</p>
                  <p>{t('services.mission2')}</p>
                  <p>{t('services.mission3')}</p>
                  <p>{t('services.mission4')}</p>
                  <p className="services-closing" style={{ 
                    marginTop: '40px', 
                    fontSize: '20px', 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    padding: '30px',
                    background: 'linear-gradient(135deg, rgba(155, 154, 132, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
                    borderRadius: '15px'
                  }}>
                    {t('services.closingBilingual')}
                    <br />
                    {t('services.closing')}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="services-cta">
                  <Link to="/programare" className="btn-default">
                    {t('buttons.bookConsultation')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
