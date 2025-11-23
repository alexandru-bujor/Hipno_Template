import React from 'react'
import { Link } from 'react-router-dom'

const ProgramarePreview = () => {
  return (
    <div className="cta-section" style={{ padding: '100px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-box">
              <div className="cta-box-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Programare</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Rezervă o consultație
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Fă primul pas către o minte mai sănătoasă și un viitor mai strălucitor. 
                    Echipa noastră compăsimitoare este aici să te sprijine la fiecare pas.
                  </p>
                </div>
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/programare" className="btn-default">
                    Programează acum
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

export default ProgramarePreview

