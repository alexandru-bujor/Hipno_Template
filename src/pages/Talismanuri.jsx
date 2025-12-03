import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import RevealImage from '../components/RevealImage'
import { useLanguage } from '../contexts/LanguageContext'

const Talismanuri = () => {
  const { t } = useLanguage()
  const talismans = [
    {
      title: 'Talismanuri de protecție',
      description:
        'Talismanuri puternice pentru protecție spirituală și fizică. Fiecare talisman este binecuvântat și pregătit cu grijă pentru a-ți oferi protecție maximă.',
      image: 'assets/images/hero-images/AdobeStock_183593206.jpeg',
      features: ['Protecție spirituală', 'Energie pozitivă', 'Binecuvântat']
    },
    {
      title: 'Artefacte antice',
      description:
        'Colecție exclusivă de artefacte cu putere spirituală dovedită. Fiecare artefact are o istorie bogată și puteri unice.',
      image: 'assets/images/hero-images/AdobeStock_267533248.jpeg',
      features: ['Istorie bogată', 'Putere dovedită', 'Colecție exclusivă']
    },
    {
      title: 'Amulete personalizate',
      description:
        'Amulete create special pentru tine, adaptate nevoilor tale specifice. Fiecare amuletă este unică și puternică.',
      image: 'assets/images/hero-images/AdobeStock_638399430.jpeg',
      features: ['Personalizat', 'Unic', 'Puternic']
    }
  ]

  return (
    <>
      <PageHeader
        title={t('nav.talismanuri')}
        subtitle="Putere spirituală"
        backgroundImage="assets/images/hero-images/AdobeStock_1013238345.jpeg"
      />
      
      <div className="our-services" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="row section-row align-items-center mb-5">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h3 className="wow fadeInUp">Colecția noastră</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Talismanuri și artefacte cu putere spirituală
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '700px', margin: '0 auto' }}>
                  Descoperă colecția noastră exclusivă de talismanuri, artefacte și amulete, 
                  fiecare cu o istorie bogată și puteri unice pentru protecție și transformare spirituală.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            {talismans.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="service-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  <div className="service-image">
                    <Link to="/consultatie" data-cursor-text="Vezi detalii">
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
                    {item.features && (
                      <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                        {item.features.map((feature, idx) => (
                          <li key={idx} style={{ marginBottom: '8px', color: '#666' }}>
                            <i className="fa-solid fa-check" style={{ color: '#007bff', marginRight: '8px' }}></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="service-btn">
                    <Link to="/consultatie" className="readmore-btn">
                      Află mai multe
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Talismanuri

