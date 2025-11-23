import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <div className="cta-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* CTA Box */}
            <div className="cta-box">
              {/* CTA Box Image */}
              <div className="cta-box-image">
                <img src="/assets/images/hero-images/AdobeStock_1013238345.jpeg" alt="CTA" />
              </div>

              {/* CTA Box Content */}
              <div className="cta-box-content">
                {/* Section Title */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Începe astăzi</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Ești gata să începi călătoria ta către bunăstare?
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Fă primul pas către o minte mai sănătoasă și un viitor mai strălucitor. Echipa noastră
                    compătimitoare este aici să te sprijine la fiecare pas.
                  </p>
                </div>

                {/* CTA Box Button */}
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/programare" className="btn-default">
                    Programare
                  </Link>
                  <Link to="/contacte" className="btn-default btn-highlighted">
                    Contacte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection

