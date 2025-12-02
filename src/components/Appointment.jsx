import React, { useState } from 'react'
import { getAssetPath } from '../utils/assets'

const Appointment = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const appointmentItems = [
    {
      icon: getAssetPath('assets/images/icon-appointment-item-1.svg'),
      title: 'book appointment',
      description: 'Schedule your appointment online or call us directly.'
    },
    {
      icon: getAssetPath('assets/images/icon-appointment-item-2.svg'),
      title: 'get consultation',
      description: 'Receive expert guidance from our experienced therapists.'
    }
  ]

  const partnerLogos = [
    getAssetPath('assets/images/partner-logo-1.svg'),
    getAssetPath('assets/images/partner-logo-2.svg'),
    getAssetPath('assets/images/partner-logo-3.svg'),
    getAssetPath('assets/images/partner-logo-1.svg'),
    getAssetPath('assets/images/partner-logo-2.svg'),
    getAssetPath('assets/images/partner-logo-3.svg')
  ]

  return (
    <div className="our-appointment">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Our Appointment Box */}
            <div className="our-appointment-box">
              {/* Appointment Form */}
              <div className="appointment-form">
                <form
                  id="appointmentForm"
                  onSubmit={handleSubmit}
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="Prenume"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Nume"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Adresă Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Număr Telefon"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="date"
                        name="date"
                        className="form-control"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="time"
                        name="time"
                        className="form-control"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="5"
                        placeholder="Mesaj"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                    <button type="submit" className="btn-default">
                      Trimite programarea
                    </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Our Appointment Content */}
              <div className="our-appointment-content">
                {/* Section Title */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Programare</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Rezervă Consultația Ta Astăzi
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Fă primul pas către o sănătate mentală mai bună. Rezervă o programare
                    cu terapeuții noștri experimentați astăzi.
                  </p>
                </div>

                {/* Appointment Content Body */}
                <div className="appointment-content-body">
                  {appointmentItems.map((item, index) => (
                    <div
                      key={index}
                      className="appointment-item wow fadeInUp"
                      data-wow-delay={`${index * 0.2 + 0.4}s`}
                    >
                      <div className="appointment-item-icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="appointment-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="our-partner">
              <div className="our-partner-content">
                {/* Section Title */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">partenerii noștri</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    În colaborare cu
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Partenerii noștri de încredere oferă servicii de terapie și consultanță 
                    pentru sănătate mentală cu compasiune și profesionalism.
                  </p>
                </div>
              </div>

              {/* Partner Logo Box */}
              <div className="partner-logo-box">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="partner-logo-image wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                  >
                    <img src={logo} alt={`Partner ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment

