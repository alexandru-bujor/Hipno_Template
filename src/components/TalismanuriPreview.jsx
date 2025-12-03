import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const TalismanuriPreview = () => {
  const { t } = useLanguage()
  return (
    <div id="talismanuri" className="our-services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              {/* Service 1 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="1">{t('talismanuri.section1.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section1.subtitle')}</p>
                <p>
                  {t('talismanuri.section1.p1')}
                </p>
                <p>
                  {t('talismanuri.section1.p2')}
                </p>
                <p>
                  {t('talismanuri.section1.p3')}
                </p>
                <ul className="services-list">
                  <li>{t('talismanuri.section1.item1')}</li>
                  <li>{t('talismanuri.section1.item2')}</li>
                </ul>
                <p className="services-note">
                  {t('talismanuri.section1.note')}
                </p>
                <p>
                  {t('talismanuri.section1.p4')}
                </p>
              </div>

              {/* Service 2 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="2">{t('talismanuri.section2.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section2.subtitle')}</p>
                <p>
                  {t('talismanuri.section2.p1')}
                </p>
                <p>
                  {t('talismanuri.section2.p2')}
                </p>
                <p>
                  {t('talismanuri.section2.p3')}
                </p>
                <p>
                  {t('talismanuri.section2.p4')}
                </p>
                <p>
                  {t('talismanuri.section2.p5')}
                </p>
                <p>
                  {t('talismanuri.section2.p6')}
                </p>
                <p>
                  {t('talismanuri.section2.p7')}
                </p>
                <h3 className="services-subsection-title">{t('talismanuri.section2.subsectionTitle')}</h3>
                <p>
                  {t('talismanuri.section2.p8')}
                </p>
              </div>

              {/* Service 3 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="3">{t('talismanuri.section3.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section3.subtitle')}</p>
                <p>
                  {t('talismanuri.section3.p1')}
                </p>
                <p>
                  {t('talismanuri.section3.p2')}
                </p>
                <p>
                  {t('talismanuri.section3.p3')}
                </p>
                <p>
                  {t('talismanuri.section3.p4')}
                </p>
                <p>
                  {t('talismanuri.section3.p5')}
                </p>
              </div>

              {/* Service 4 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="4">{t('talismanuri.section4.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section4.subtitle')}</p>
                <p>
                  {t('talismanuri.section4.p1')}
                </p>
                <p>
                  {t('talismanuri.section4.p2')}
                </p>
                <p>
                  {t('talismanuri.section4.p3')}
                </p>
                <p>
                  {t('talismanuri.section4.p4')}
                </p>
                <p>
                  {t('talismanuri.section4.p5')}
                </p>
                <p>
                  {t('talismanuri.section4.p6')}
                </p>
                <p>
                  {t('talismanuri.section4.p7')}
                </p>
              </div>

              {/* Service 5 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="5">{t('talismanuri.section5.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section5.subtitle')}</p>
                <p>
                  {t('talismanuri.section5.p1')}
                </p>
                <p>
                  {t('talismanuri.section5.p2')}
                </p>
                <p>
                  {t('talismanuri.section5.p3')}
                </p>
                <p>
                  {t('talismanuri.section5.p4')}
                </p>
                <p>
                  {t('talismanuri.section5.p5')}
                </p>
              </div>

              {/* Service 6 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="6">{t('talismanuri.section6.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section6.subtitle')}</p>
                <p>
                  {t('talismanuri.section6.p1')}
                </p>
                <p>
                  {t('talismanuri.section6.p2')}
                </p>
                <p>
                  {t('talismanuri.section6.p3')}
                </p>
                <h3 className="services-subsection-title">{t('talismanuri.section6.subsectionTitle')}</h3>
                <ul className="services-list">
                  <li>{t('talismanuri.section6.item1')}</li>
                  <li>{t('talismanuri.section6.item2')}</li>
                  <li>{t('talismanuri.section6.item3')}</li>
                  <li>{t('talismanuri.section6.item4')}</li>
                  <li>{t('talismanuri.section6.item5')}</li>
                  <li>{t('talismanuri.section6.item6')}</li>
                  <li>{t('talismanuri.section6.item7')}</li>
                  <li>{t('talismanuri.section6.item8')}</li>
                </ul>
                <p>
                  {t('talismanuri.section6.p4')}
                </p>
              </div>

              {/* Service 7 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="7">{t('talismanuri.section7.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section7.subtitle')}</p>
                <p>
                  {t('talismanuri.section7.p1')}
                </p>
                <p>
                  {t('talismanuri.section7.p2')}
                </p>
                <p>
                  {t('talismanuri.section7.p3')}
                </p>
                <p>
                  {t('talismanuri.section7.p4')}
                </p>
                <h3 className="services-subsection-title">{t('talismanuri.section7.subsectionTitle')}</h3>
                <ul className="services-list">
                  <li>{t('talismanuri.section7.item1')}</li>
                  <li>{t('talismanuri.section7.item2')}</li>
                  <li>{t('talismanuri.section7.item3')}</li>
                  <li>{t('talismanuri.section7.item4')}</li>
                  <li>{t('talismanuri.section7.item5')}</li>
                  <li>{t('talismanuri.section7.item6')}</li>
                  <li>{t('talismanuri.section7.item7')}</li>
                  <li>{t('talismanuri.section7.item8')}</li>
                  <li>{t('talismanuri.section7.item9')}</li>
                </ul>
                <p>
                  {t('talismanuri.section7.p5')}
                </p>
                <p>
                  {t('talismanuri.section7.p6')}
                </p>
              </div>

              {/* Service 8 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="8">{t('talismanuri.section8.title')}</h2>
                <p className="services-subtitle">{t('talismanuri.section8.subtitle')}</p>
                <p>
                  {t('talismanuri.section8.p1')}
                </p>
                <p>
                  {t('talismanuri.section8.p2')}
                </p>
                <h3 className="services-subsection-title">{t('talismanuri.section8.subsectionTitle')}</h3>
                <ul className="services-list">
                  <li>{t('talismanuri.section8.item1')}</li>
                  <li>{t('talismanuri.section8.item2')}</li>
                  <li>{t('talismanuri.section8.item3')}</li>
                  <li>{t('talismanuri.section8.item4')}</li>
                  <li>{t('talismanuri.section8.item5')}</li>
                  <li>{t('talismanuri.section8.item6')}</li>
                  <li>{t('talismanuri.section8.item7')}</li>
                </ul>
                <p>
                  {t('talismanuri.section8.p3')}
                </p>
                <p>
                  {t('talismanuri.section8.p4')}
                </p>
                <p>
                  {t('talismanuri.section8.p5')}
                </p>
              </div>

              {/* CTA Button */}
              <div className="services-cta">
                <Link to="/programare" className="btn-default">
                  {t('talismanuri.ctaButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TalismanuriPreview
