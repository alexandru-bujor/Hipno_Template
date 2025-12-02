import React from 'react'
import { Link } from 'react-router-dom'
import RevealImage from './RevealImage'
import { getAssetPath } from '../utils/assets'

const RitualuriPreview = () => {
  const rituals = [
    {
      title: 'Ritualuri de purificare',
      description: 'Ritualuri tradiționale pentru curățarea energiei negative și restabilirea echilibrului spiritual.',
      image: getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg')
    },
    {
      title: 'Ritualuri de protecție',
      description: 'Ritualuri puternice pentru protecție spirituală și fizică, adaptate nevoilor tale.',
      image: getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg')
    },
    {
      title: 'Ritualuri personalizate',
      description: 'Ritualuri create special pentru nevoile tale unice, pentru transformare profundă.',
      image: getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg')
    }
  ]

  return (
    <div className="our-services" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6 col-md-9">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">ritualuri</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Transformare spirituală profundă
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Oferim ritualuri tradiționale și moderne, adaptate nevoilor tale, 
                pentru purificare, protecție și transformare spirituală profundă.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-3">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/ritualuri" className="btn-default">
                Vezi toate ritualurile
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {rituals.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="service-image">
                  <Link to="/ritualuri" data-cursor-text="Vezi detalii">
                    <RevealImage>
                      <figure className="image-anime">
                        <img src={item.image} alt={item.title} />
                      </figure>
                    </RevealImage>
                  </Link>
                </div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="service-btn">
                  <Link to="/ritualuri" className="readmore-btn">
                    Află mai multe
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RitualuriPreview

