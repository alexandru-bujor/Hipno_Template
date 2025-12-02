import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RevealImage from './RevealImage'
import Counter from './Counter'
import { getAssetPath } from '../utils/assets'

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Ce tipuri de servicii oferiți?',
      answer:
        'Oferim o gamă completă de servicii terapeutice, inclusiv consultații individuale, consultații pentru cupluri, ritualuri de purificare, ritualuri de protecție, talismanuri personalizate și tratamente specializate pentru anxietate, depresie, traume și multe altele.'
    },
    {
      question: 'Cât durează o consultație tipică?',
      answer:
        'Majoritatea consultațiilor durează aproximativ 60-90 de minute. Durata poate varia în funcție de tipul de serviciu și nevoile individuale.'
    },
    {
      question: 'Cum pot programa o consultație?',
      answer:
        'Poți programa o consultație sunând la biroul nostru, completând formularul online de contact sau folosind sistemul nostru de rezervare online. Oferim programări flexibile pentru a se adapta nevoilor tale.'
    },
    {
      question: 'Sunt consultațiile confidențiale?',
      answer:
        'Absolut. Toate consultațiile sunt complet confidențiale. Respectăm standarde stricte de confidențialitate și intimitate, conform cerințelor legale și eticii profesionale.'
    },
    {
      question: 'Ce ar trebui să mă aștept la prima consultație?',
      answer:
        'Prima ta consultație este de obicei o consultație inițială în care vei discuta cu specialistul despre preocupările tale, obiectivele și contextul. Acest lucru ne ajută să înțelegem nevoile tale și să dezvoltăm un plan de acțiune adecvat.'
    },
    {
      question: 'Ce sunt talismanurile și cum funcționează?',
      answer:
        'Talismanurile sunt obiecte binecuvântate cu putere spirituală pentru protecție și transformare. Fiecare talisman este pregătit cu grijă și adaptat nevoilor tale specifice pentru a-ți oferi protecție și energie pozitivă.'
    }
  ]

  const customerImages = [
    getAssetPath('assets/images/hero-images/AdobeStock_183593206.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg')
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div
      className="our-faqs parallaxie"
      style={{
        backgroundImage: `url(${getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* Our FAQs Content */}
            <div className="our-faqs-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Întrebări frecvente</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Întrebări frecvente
                </h2>
              </div>

              {/* FAQs CTA Box */}
              <div className="faq-cta-box">
                <div className="customer-images">
                  {customerImages.map((img, index) => (
                    <div key={index} className="customer-img">
                      <RevealImage>
                        <figure className="image-anime">
                          <img src={img} alt={`Client ${index + 1}`} />
                        </figure>
                      </RevealImage>
                    </div>
                  ))}
                  <div className="customer-img add-more">
                    <p>
                      <Counter value={30} suffix="k" />
                    </p>
                  </div>
                </div>
                <div className="faq-cta-content">
                  <h3>Mai ai întrebări?</h3>
                  <p>Suntem aici să te ajutăm. Contactează-ne pentru mai multe informații.</p>
                  <Link to="/contacte" className="btn-default">
                    Contactează-ne
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* FAQs Accordion */}
            <div className="faqs-accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">
                      <i
                        className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}
                      ></i>
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs

