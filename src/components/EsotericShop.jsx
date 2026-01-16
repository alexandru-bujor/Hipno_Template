import React from 'react'
import { Link } from 'react-router-dom'
import CollapsibleList from './CollapsibleList'
import { useLanguage } from '../contexts/LanguageContext'
import PageHeader from "./PageHeader";

const EsotericShop = () => {
  const { t } = useLanguage()
  
  return (
<>
      <PageHeader
          backgroundImage="assets/images/hero-images/AdobeStock_267533248.jpeg"
      />
    <div 
      id="magazin" 
      className="our-services"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              {/* Main Title */}


              {/* Subtitle */}
              <div className="services-section services-subtitle-section">
                <h3 className="services-section-title services-subtitle-title">
                  {t('magazin.subtitle')}
                </h3>
              </div>

              {/* Category 1 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="1">
                  {t('magazin.category1.title')}
                </h2>
                <CollapsibleList
                  items={t('magazin.category1.items', { returnObjects: true })}
                  initialVisible={5}
                  listStyle="cards"
                />
              </div>

              {/* Category 2 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="2">
                  {t('magazin.category2.title')}
                </h2>
                
                <h3 className="services-subtitle">{t('magazin.category2.subsection1.title')}</h3>
                <CollapsibleList
                  items={t('magazin.category2.subsection1.items', { returnObjects: true })}
                  initialVisible={6}
                  listStyle="cards"
                />

                <h3 className="services-subtitle">{t('magazin.category2.subsection2.title')}</h3>
                <CollapsibleList
                  items={t('magazin.category2.subsection2.items', { returnObjects: true })}
                  initialVisible={5}
                  listStyle="grid"
                />

                <h3 className="services-subtitle">{t('magazin.category2.subsection3.title')}</h3>
                <CollapsibleList
                  items={t('magazin.category2.subsection3.items', { returnObjects: true })}
                  initialVisible={4}
                  listStyle="minimal"
                />

                <h3 className="services-subtitle">{t('magazin.category2.subsection4.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category2.subsection4.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category2.subsection5.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category2.subsection5.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category2.subsection6.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category2.subsection6.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 3 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="3">
                  {t('magazin.category3.title')}
                </h2>
                
                <h3 className="services-subtitle">{t('magazin.category3.subsection1.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection1.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection2.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection2.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection3.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection3.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection4.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection4.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection5.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection5.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection6.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection6.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection7.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection7.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="services-subtitle">{t('magazin.category3.subsection8.title')}</h3>
                <ul className="services-list">
                  {t('magazin.category3.subsection8.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 4 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="4">
                  {t('magazin.category4.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category4.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 5 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="5">
                  {t('magazin.category5.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category5.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 6 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="6">
                  {t('magazin.category6.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category6.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 7 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="7">
                  {t('magazin.category7.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category7.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 8 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="8">
                  {t('magazin.category8.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category8.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 9 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="9">
                  {t('magazin.category9.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category9.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Category 10 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="10">
                  {t('magazin.category10.title')}
                </h2>
                <ul className="services-list">
                  {t('magazin.category10.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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

export default EsotericShop
