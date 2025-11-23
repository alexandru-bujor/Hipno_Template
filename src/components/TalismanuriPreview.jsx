import React from 'react'
import { Link } from 'react-router-dom'
import RevealImage from './RevealImage'

const TalismanuriPreview = () => {
  const talismans = [
    {
      title: 'Talismanuri de protecție',
      description: 'Talismanuri puternice pentru protecție spirituală și fizică.',
      image: 'assets/images/hero-images/AdobeStock_183593206.jpeg'
    },
    {
      title: 'Artefacte antice',
      description: 'Colecție exclusivă de artefacte cu putere spirituală dovedită.',
      image: 'assets/images/hero-images/AdobeStock_267533248.jpeg'
    },
    {
      title: 'Amulete personalizate',
      description: 'Amulete create special pentru tine, adaptate nevoilor tale.',
      image: 'assets/images/hero-images/AdobeStock_638399430.jpeg'
    }
  ]

  return (
    <div className="our-services" style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6 col-md-9">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">talismanuri și artefacte</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Putere spirituală autentică
              </h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                Descoperă colecția noastră exclusivă de talismanuri, artefacte și amulete, 
                fiecare cu o istorie bogată și puteri unice pentru protecție și transformare spirituală.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-3">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/talismanuri" className="btn-default">
                Vezi toate talismanurile
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {talismans.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="service-image">
                  <Link to="/talismanuri" data-cursor-text="Vezi detalii">
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
                  <Link to="/talismanuri" className="readmore-btn">
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

export default TalismanuriPreview

