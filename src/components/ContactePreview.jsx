import React from 'react'
import { Link } from 'react-router-dom'

const ContactePreview = () => {
  return (
    <div className="cta-section" style={{ padding: '100px 0', background: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box">
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Contacte</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Ia legătura cu noi
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Suntem aici să te ajutăm. Contactează-ne pentru mai multe informații 
                    despre serviciile noastre sau pentru a programa o consultație.
                  </p>
                </div>
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
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
  )
}

export default ContactePreview

