import React, { useState } from 'react'
import { getAssetPath } from '../utils/assets'
import { useLanguage } from '../contexts/LanguageContext'

const Appointment = () => {
  const { t } = useLanguage()
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
      title: t('programare.content.item1Title'),
      description: t('programare.content.item1Desc')
    },
    {
      icon: getAssetPath('assets/images/icon-appointment-item-2.svg'),
      title: t('programare.content.item2Title'),
      description: t('programare.content.item2Desc')
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
                        placeholder={t('programare.form.fname')}
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
                        placeholder={t('programare.form.lname')}
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
                        placeholder={t('programare.form.email')}
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
                        placeholder={t('programare.form.phone')}
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
                        placeholder={t('programare.form.message')}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                    <button type="submit" className="btn-default">
                      {t('programare.form.submit')}
                    </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Our Appointment Content */}
              <div className="our-appointment-content">
                {/* Section Title */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">{t('programare.content.title')}</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t('programare.content.heading')}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {t('programare.content.description')}
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

        </div>
      </div>
    </div>
  )
}

export default Appointment

