import React from 'react'
import { Link } from 'react-router-dom'
import CollapsibleList from './CollapsibleList'
import { useLanguage } from '../contexts/LanguageContext'

const RitualuriPreview = () => {
  const { t } = useLanguage()
  
  return (
    <div 
      id="ritualuri" 
      className="our-services"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="services-content">
              {/* Main Title */}
              <div className="services-section services-main-title">
                <h2 className="services-section-title services-title-main">
                  {t('ritualuri.title')}
                </h2>
              </div>

              {/* Service 1 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="1">{t('ritualuri.section1.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section1.item1'),
                    t('ritualuri.section1.item2'),
                    t('ritualuri.section1.item3'),
                    t('ritualuri.section1.item4'),
                    t('ritualuri.section1.item5')
                  ]}
                  initialVisible={3}
                  listStyle="default"
                />
              </div>

              {/* Service 2 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="2">{t('ritualuri.section2.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section2.item1'),
                    t('ritualuri.section2.item2'),
                    t('ritualuri.section2.item3'),
                    t('ritualuri.section2.item4'),
                    t('ritualuri.section2.item5'),
                    t('ritualuri.section2.item6'),
                    t('ritualuri.section2.item7'),
                    t('ritualuri.section2.item8')
                  ]}
                  initialVisible={4}
                  listStyle="cards"
                />
              </div>

              {/* Service 3 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="3">{t('ritualuri.section3.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section3.item1'),
                    t('ritualuri.section3.item2'),
                    t('ritualuri.section3.item3'),
                    t('ritualuri.section3.item4'),
                    t('ritualuri.section3.item5')
                  ]}
                  initialVisible={3}
                  listStyle="cards"
                />
              </div>

              {/* Service 4 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="4">{t('ritualuri.section4.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section4.item1'),
                    t('ritualuri.section4.item2'),
                    t('ritualuri.section4.item3'),
                    t('ritualuri.section4.item4'),
                    t('ritualuri.section4.item5'),
                    t('ritualuri.section4.item6')
                  ]}
                  initialVisible={3}
                  listStyle="grid"
                />
              </div>

              {/* Service 5 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="5">{t('ritualuri.section5.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section5.item1'),
                    t('ritualuri.section5.item2'),
                    t('ritualuri.section5.item3'),
                    t('ritualuri.section5.item4'),
                    t('ritualuri.section5.item5')
                  ]}
                  initialVisible={3}
                  listStyle="minimal"
                />
              </div>

              {/* Service 6 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="6">{t('ritualuri.section6.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section6.item1'),
                    t('ritualuri.section6.item2'),
                    t('ritualuri.section6.item3')
                  ]}
                  initialVisible={3}
                  listStyle="grid"
                  showSeeMore={false}
                />
              </div>

              {/* Service 7 */}
              <div className="services-section">
                <h2 className="services-section-title" data-number="7">{t('ritualuri.section7.title')}</h2>
                <CollapsibleList
                  items={[
                    t('ritualuri.section7.item1'),
                    t('ritualuri.section7.item2'),
                    t('ritualuri.section7.item3'),
                    t('ritualuri.section7.item4'),
                    t('ritualuri.section7.item5')
                  ]}
                  initialVisible={3}
                  listStyle="default"
                />
              </div>

              {/* CTA Button */}
              <div className="services-cta">
                <Link to="/programare" className="btn-default">
                  {t('ritualuri.ctaButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RitualuriPreview
