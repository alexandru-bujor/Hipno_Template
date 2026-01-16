import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from './PageHeader'
import { useLanguage } from '../contexts/LanguageContext'

const WhatWeDo = () => {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHeader
        backgroundImage="assets/images/hero-images/AdobeStock_1649580010.jpeg"
      />
      
      <div className="our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-content">
                
                {/* Section 1: Diagnostic și citirea destinului */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="1">
                    {t('whatwedo.section1.title')}
                  </h2>
                  <p>{t('whatwedo.section1.p1')}</p>
                  <p>{t('whatwedo.section1.p2')}</p>
                  <p>{t('whatwedo.section1.p3')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section1.item1')}</li>
                    <li>{t('whatwedo.section1.item3')}</li>
                  </ul>
                  <p>{t('whatwedo.section1.p4')}</p>
                  <p>{t('whatwedo.section1.p5')}</p>
                </div>

                {/* Section 2: Purificare și restaurare energetică */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="2">
                    {t('whatwedo.section2.title')}
                  </h2>
                  <p>{t('whatwedo.section2.p1')}</p>
                  <p>{t('whatwedo.section2.p2')}</p>
                  <p>{t('whatwedo.section2.p3')}</p>
                  <p>{t('whatwedo.section2.p4')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section2.item1')}</li>
                    <li>{t('whatwedo.section2.item2')}</li>
                    <li>{t('whatwedo.section2.item3')}</li>
                    <li>{t('whatwedo.section2.item4')}</li>
                    <li>{t('whatwedo.section2.item5')}</li>
                    <li>{t('whatwedo.section2.item6')}</li>
                    <li>{t('whatwedo.section2.item7')}</li>
                    <li>{t('whatwedo.section2.item8')}</li>
                  </ul>
                  <p>{t('whatwedo.section2.p5')}</p>
                  <p>{t('whatwedo.section2.p6')}</p>
                  <p>{t('whatwedo.section2.p7')}</p>
                  <p>{t('whatwedo.section2.p8')}</p>
                  <p><strong>{t('whatwedo.section2.subsectionTitle')}</strong></p>
                  <p>{t('whatwedo.section2.p9')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section2.item9')}</li>
                    <li>{t('whatwedo.section2.item10')}</li>
                    <li>{t('whatwedo.section2.item11')}</li>
                    <li>{t('whatwedo.section2.item12')}</li>
                    <li>{t('whatwedo.section2.item13')}</li>
                    <li>{t('whatwedo.section2.item14')}</li>
                    <li>{t('whatwedo.section2.item15')}</li>
                    <li>{t('whatwedo.section2.item16')}</li>
                    <li>{t('whatwedo.section2.item17')}</li>
                  </ul>
                </div>

                {/* Section 3: Purificarea și armonizarea spațiului */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="3">
                    {t('whatwedo.section3.title')}
                  </h2>
                  <p>{t('whatwedo.section3.p1')}</p>
                  <p>{t('whatwedo.section3.p2')}</p>
                  <p>{t('whatwedo.section3.p3')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section3.item1')}</li>
                    <li>{t('whatwedo.section3.item2')}</li>
                    <li>{t('whatwedo.section3.item3')}</li>
                    <li>{t('whatwedo.section3.item4')}</li>
                    <li>{t('whatwedo.section3.item5')}</li>
                    <li>{t('whatwedo.section3.item6')}</li>
                    <li>{t('whatwedo.section3.item7')}</li>
                    <li>{t('whatwedo.section3.item8')}</li>
                  </ul>
                  <p>{t('whatwedo.section3.p4')}</p>
                  <p>{t('whatwedo.section3.p5')}</p>
                  <p>{t('whatwedo.section3.p6')}</p>
                </div>

                {/* Section 4: Armonizarea personalității și a relațiilor */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="4">
                    {t('whatwedo.section4.title')}
                  </h2>
                  <p>{t('whatwedo.section4.subtitle')}</p>
                  <p>{t('whatwedo.section4.p1')}</p>
                  <p>{t('whatwedo.section4.p2')}</p>
                  <p>{t('whatwedo.section4.p3')}</p>
                  <p>{t('whatwedo.section4.p4')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section4.item1')}</li>
                    <li>{t('whatwedo.section4.item2')}</li>
                    <li>{t('whatwedo.section4.item3')}</li>
                    <li>{t('whatwedo.section4.item4')}</li>
                    <li>{t('whatwedo.section4.item5')}</li>
                  </ul>
                  <p>{t('whatwedo.section4.p5')}</p>
                  <p>{t('whatwedo.section4.p6')}</p>
                  <p>{t('whatwedo.section4.p7')}</p>
                  <p>{t('whatwedo.section4.p8')}</p>
                </div>

                {/* Section 5: Fluxul financiar și realizarea materială */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="5">
                    {t('whatwedo.section5.title')}
                  </h2>
                  <p>{t('whatwedo.section5.subtitle')}</p>
                  <p>{t('whatwedo.section5.p1')}</p>
                  <p>{t('whatwedo.section5.p2')}</p>
                  <p>{t('whatwedo.section5.p3')}</p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section5.item1')}</li>
                    <li>{t('whatwedo.section5.item2')}</li>
                    <li>{t('whatwedo.section5.item3')}</li>
                    <li>{t('whatwedo.section5.item4')}</li>
                    <li>{t('whatwedo.section5.item5')}</li>
                    <li>{t('whatwedo.section5.item6')}</li>
                  </ul>
                  <p>{t('whatwedo.section5.p4')}</p>
                  <p>{t('whatwedo.section5.p5')}</p>
                  <p>{t('whatwedo.section5.p6')}</p>
                </div>

                {/* Section 6: Artefacte de putere și obiecte sacre */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="6">
                    {t('whatwedo.section6.title')}
                  </h2>
                  <p>{t('whatwedo.section6.subtitle')}</p>
                  <p>{t('whatwedo.section6.p1')}</p>
                  <p>{t('whatwedo.section6.p2')}</p>
                  <p>{t('whatwedo.section6.p3')}</p>
                  <p><strong>{t('whatwedo.section6.subsectionTitle')}</strong></p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section6.item1')}</li>
                    <li>{t('whatwedo.section6.item2')}</li>
                    <li>{t('whatwedo.section6.item3')}</li>
                    <li>{t('whatwedo.section6.item4')}</li>
                    <li>{t('whatwedo.section6.item5')}</li>
                    <li>{t('whatwedo.section6.item6')}</li>
                    <li>{t('whatwedo.section6.item7')}</li>
                    <li>{t('whatwedo.section6.item8')}</li>
                  </ul>
                  <p>{t('whatwedo.section6.p4')}</p>
                </div>

                {/* Section 7: Rituale și practici sacre */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="7">
                    {t('whatwedo.section7.title')}
                  </h2>
                  <p>{t('whatwedo.section7.subtitle')}</p>
                  <p>{t('whatwedo.section7.p1')}</p>
                  <p>{t('whatwedo.section7.p2')}</p>
                  <p>{t('whatwedo.section7.p3')}</p>
                  <p>{t('whatwedo.section7.p4')}</p>
                  <p><strong>{t('whatwedo.section7.subsectionTitle')}</strong></p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section7.item1')}</li>
                    <li>{t('whatwedo.section7.item2')}</li>
                    <li>{t('whatwedo.section7.item3')}</li>
                    <li>{t('whatwedo.section7.item4')}</li>
                    <li>{t('whatwedo.section7.item5')}</li>
                    <li>{t('whatwedo.section7.item6')}</li>
                    <li>{t('whatwedo.section7.item7')}</li>
                    <li>{t('whatwedo.section7.item8')}</li>
                    <li>{t('whatwedo.section7.item9')}</li>
                    <li>{t('whatwedo.section7.item10')}</li>
                  </ul>
                  <p>{t('whatwedo.section7.p5')}</p>
                </div>

                {/* Section 8: Învățare spirituală și însoțire pe cale */}
                <div className="services-section">
                  <h2 className="services-section-title" data-number="8">
                    {t('whatwedo.section8.title')}
                  </h2>
                  <p>{t('whatwedo.section8.subtitle')}</p>
                  <p>{t('whatwedo.section8.p1')}</p>
                  <p>{t('whatwedo.section8.p2')}</p>
                  <p><strong>{t('whatwedo.section8.subsectionTitle')}</strong></p>
                  <ul className="services-list">
                    <li>{t('whatwedo.section8.item1')}</li>
                    <li>{t('whatwedo.section8.item2')}</li>
                    <li>{t('whatwedo.section8.item3')}</li>
                    <li>{t('whatwedo.section8.item4')}</li>
                    <li>{t('whatwedo.section8.item5')}</li>
                    <li>{t('whatwedo.section8.item6')}</li>
                    <li>{t('whatwedo.section8.item7')}</li>
                  </ul>
                  <p>{t('whatwedo.section8.p3')}</p>
                  <p>{t('whatwedo.section8.p4')}</p>
                  <p>{t('whatwedo.section8.p5')}</p>
                </div>

                {/* CTA Button */}
                <div className="services-cta">
                  <Link to="/programare" className="btn-default">
                    {t('whatwedo.ctaButton')}
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

export default WhatWeDo
