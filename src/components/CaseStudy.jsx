import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

const CaseStudy = () => {
  const caseStudies = [
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_183593206.jpeg'),
      title: 'Succes în depășirea anxietății',
      description:
        'Printr-o abordare personalizată, acest studiu de caz explorează călătoria de depășire a anxietății sociale prin ritualuri și consultații.',
      link: '/case-study-single'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg'),
      title: 'Relații mai puternice',
      description:
        'Descoperă cum am ajutat cupluri să-și îmbunătățească relațiile prin consultații și ritualuri de legătură spirituală.',
      link: '/case-study-single'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg'),
      title: 'Succes în managementul stresului',
      description:
        'Află cum am ajutat persoane să-și gestioneze stresul prin tehnici tradiționale și ritualuri de purificare.',
      link: '/case-study-single'
    }
  ]

  return (
    <div className="case-study">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">studii de caz</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Povești reale de vindecare și creștere
              </h2>
            </div>
          </div>

          <div className="col-lg-7">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/case-study" className="btn-default">
                Vezi toate studiile de caz
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {caseStudies.map((study, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="case-study-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                <div className="case-study-image">
                  <Link to={study.link} data-cursor-text="View">
                    <figure>
                      <img src={study.image} alt={study.title} />
                    </figure>
                  </Link>
                </div>
                <div className="case-study-content">
                  <h3>
                    <Link to={study.link}>{study.title}</Link>
                  </h3>
                  <p>{study.description}</p>
                </div>
                <div className="case-study-btn">
                  <Link to={study.link} className="readmore-btn">
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

export default CaseStudy

