import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Programare',
      description: 'Rezervarea unei programări cu noi este simplă și rapidă. Poți programa online sau telefonic.'
    },
    {
      number: '02',
      title: 'Consultație inițială',
      description: 'În prima consultație, discutăm despre nevoile tale și stabilim un plan personalizat de acțiune.'
    },
    {
      number: '03',
      title: 'Proces de transformare',
      description: 'Lucrăm împreună prin ritualuri, consultații și metode tradiționale pentru transformarea ta.'
    },
    {
      number: '04',
      title: 'Sprijin continuu',
      description: 'Oferim sprijin continuu și urmărire pentru a te ajuta să menții progresul și echilibrul.'
    }
  ]

  return (
    <div className="how-it-work">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">cum funcționează</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Te ghidăm prin procesul de transformare
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/contacte" className="btn-default">
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* How Work Step Box */}
            <div className="how-work-step-box">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="how-work-step-item wow fadeInUp"
                  data-wow-delay={`${index * 0.2}s`}
                >
                  <div className="how-work-step-no">
                    <h3>{step.number}</h3>
                  </div>
                  <div className="how-work-step-content">
                    <h3>
                      {step.number}. {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

