import React, { useState } from 'react'
import { getAssetPath } from '../utils/assets'

const ContactSection = ({ language }) => {
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
    console.log('Form submitted:', formData)
  }

  const content = {
    ro: {
      title: 'Programare',
      subtitle: 'Rezervă Consultația Ta Astăzi',
      description: 'Fă primul pas către transformarea ta. Rezervă o programare astăzi.',
      form: {
        fname: 'Prenume',
        lname: 'Nume',
        email: 'Adresă Email',
        phone: 'Număr Telefon',
        date: 'Data',
        time: 'Ora',
        message: 'Mesaj',
        submit: 'Trimite programarea'
      }
    },
    ru: {
      title: 'Запись',
      subtitle: 'Забронируй Консультацию Сегодня',
      description: 'Сделай первый шаг к своей трансформации. Запишись на консультацию сегодня.',
      form: {
        fname: 'Имя',
        lname: 'Фамилия',
        email: 'Email',
        phone: 'Телефон',
        date: 'Дата',
        time: 'Время',
        message: 'Сообщение',
        submit: 'Отправить заявку'
      }
    }
  }

  const currentContent = content[language]

  return (
    <div className="contact-section-content">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h3 className="section-title-small">{currentContent.title}</h3>
          <h2 className="section-title-main">{currentContent.subtitle}</h2>
          <p className="section-description">{currentContent.description}</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="fname"
                placeholder={currentContent.form.fname}
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lname"
                placeholder={currentContent.form.lname}
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={currentContent.form.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder={currentContent.form.phone}
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="4"
              placeholder={currentContent.form.message}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            {currentContent.form.submit}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection

