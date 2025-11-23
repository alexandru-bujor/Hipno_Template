import React from 'react'
import { Link } from 'react-router-dom'
import RevealImage from './RevealImage'

const WhyChooseUs = () => {
  const whyChooseItems = [
    {
      icon: '/assets/images/icon-why-choose-1.svg',
      title: 'experienced professionals'
    },
    {
      icon: '/assets/images/icon-why-choose-2.svg',
      title: 'client-centered approach'
    },
    {
      icon: '/assets/images/icon-why-choose-3.svg',
      title: 'safe and confidential environment'
    },
    {
      icon: '/assets/images/icon-why-choose-4.svg',
      title: 'commitment to growth'
    }
  ]

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="why-choose-us-box">
              {/* Why Choose Image */}
              <div className="why-choose-image">
                <RevealImage>
                  <figure className="image-anime">
                    <img src="/assets/images/hero-images/AdobeStock_1013238345.jpeg" alt="Why Choose Us" />
                  </figure>
                </RevealImage>

                {/* Contact Circle Image */}
                <div className="contact-circle-img">
                  <img src="/assets/images/contact-circle-img.svg" alt="Contact" />
                </div>
              </div>

              {/* Why Choose Content */}
              <div className="why-choose-content">
                {/* Section Title */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">de ce să ne alegi</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Îngrijire de încredere, schimbare pozitivă durabilă
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Cu un angajament față de îngrijire compătimitoare și bazată pe dovezi, împuternicim
                    persoanele să creeze schimbări pozitive durabile în viața lor. Echipa noastră de
                    specialiști experimentați oferă.
                  </p>
                </div>

                {/* Why Choose List */}
                <div className="why-choose-list">
                  {whyChooseItems.map((item, index) => (
                    <div
                      key={index}
                      className="why-choose-item wow fadeInUp"
                      data-wow-delay={`${index * 0.2}s`}
                    >
                      <div className="icon-box">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="why-choose-item-content">
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Body */}
                <div className="why-choose-body">
                  {/* Why Choose Body Image */}
                  <div className="why-choose-body-image">
                    <RevealImage>
                      <figure className="image-anime">
                        <img src="/assets/images/hero-images/AdobeStock_1649580010.jpeg" alt="Mental Wellness" />
                      </figure>
                    </RevealImage>
                  </div>

                  {/* Why Choose Body Content */}
                  <div className="why-choose-body-content wow fadeInUp">
                    <h3>Alegându-ne pentru bunăstarea ta</h3>
                    <p>
                      Alegându-ne pentru bunăstarea ta mentală înseamnă să te asociezi cu o echipă
                      dedicată de profesioniști angajați în creșterea și vindecarea ta. Abordarea noastră
                      holistică combină terapii bazate pe dovezi, sprijin personalizat și compasiune.
                    </p>
                    <Link to="/contacte" className="btn-default">
                      Contactează-ne
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

