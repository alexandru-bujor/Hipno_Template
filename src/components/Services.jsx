import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      image: '/assets/images/hero-images/AdobeStock_1013238345.jpeg',
      title: 'Consultație individuală personalizată',
      description: 'Consultații adaptate nevoilor tale specifice pentru transformare profundă și vindecare.',
      link: '/consultatie'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_1649580010.jpeg',
      title: 'Consultație pentru cupluri',
      description: 'Sprijin pentru cupluri în căutarea armoniei și conexiunii mai profunde în relație.',
      link: '/consultatie'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_183593206.jpeg',
      title: 'Consultație pentru tineri',
      description: 'Sprijin specializat pentru tineri și adolescenți în procesul de creștere și dezvoltare.',
      link: '/consultatie'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_267533248.jpeg',
      title: 'Sprijin pentru anxietate și depresie',
      description: 'Tehnici tradiționale și moderne pentru depășirea anxietății și depresiei.',
      link: '/consultatie'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_638399430.jpeg',
      title: 'Managementul stresului și furiei',
      description: 'Ritualuri și tehnici pentru gestionarea eficientă a stresului și emoțiilor negative.',
      link: '/consultatie'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_723363653.jpeg',
      title: 'Practici de mindfulness și meditație',
      description: 'Tehnici de conștientizare și meditație pentru echilibru și armonie interioară.',
      link: '/consultatie'
    }
  ]

  return (
    <div className="our-services">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6 col-md-9">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">servicii</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Consultații spirituale
              </h2>
            </div>
          </div>

          <div className="col-lg-6 col-md-3">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/consultatie" className="btn-default">
                Vezi toate serviciile
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="service-image">
                  <Link to={service.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={service.image} alt={service.title} />
                    </figure>
                  </Link>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-btn">
                  <Link to={service.link} className="readmore-btn">
                    Află mai multe
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            {/* Service Get Quote Text */}
            <div className="service-get-quote-text wow fadeInUp" data-wow-delay="1s">
              <p>
                <span>Gratuit</span> Hai să facem ceva minunat împreună.{' '}
                <Link to="/contacte">Contactează-ne</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

