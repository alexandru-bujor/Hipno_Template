import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Counter from './Counter'
import RevealImage from './RevealImage'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      image: '/assets/images/hero-images/AdobeStock_183593206.jpeg',
      quote:
        'Nu pot să le mulțumesc suficient specialiștilor pentru abordarea lor compătimitoare. M-au ajutat să procesez traumele într-un mediu sigur și am văzut îmbunătățiri semnificative în sănătatea mea mentală.',
      author: 'Maria P.',
      position: 'Clientă'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_267533248.jpeg',
      quote:
        'Ritualurile și consultațiile m-au ajutat să găsesc pacea interioară pe care o căutam de atâția ani. Recomand cu încredere serviciile acestora.',
      author: 'Ion D.',
      position: 'Client'
    },
    {
      image: '/assets/images/hero-images/AdobeStock_638399430.jpeg',
      quote:
        'Talismanurile pe care le-am primit au adus o schimbare pozitivă în viața mea. Simt o protecție și o energie pozitivă pe care nu le simțeam înainte.',
      author: 'Ana M.',
      position: 'Clientă'
    }
  ]

  const customerImages = [
    '/assets/images/hero-images/AdobeStock_723363653.jpeg',
    '/assets/images/hero-images/AdobeStock_1013238345.jpeg',
    '/assets/images/hero-images/AdobeStock_1649580010.jpeg',
    '/assets/images/hero-images/AdobeStock_183593206.jpeg'
  ]

  const companyLogos = [
    '/assets/images/company-logo-1.svg',
    '/assets/images/company-logo-2.svg',
    '/assets/images/company-logo-3.svg',
    '/assets/images/company-logo-4.svg',
    '/assets/images/company-logo-5.svg',
    '/assets/images/company-logo-1.svg'
  ]

  return (
    <div className="our-testimonial">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">testimoniale</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Povești ale clienților despre vindecare și creștere
              </h2>
            </div>
          </div>

          <div className="col-lg-7">
            {/* Section Button */}
            <div className="section-btn">
              <Link to="/contacte" className="btn-default">
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-4">
            {/* Testimonial Review Box */}
            <div className="testimonial-review-box">
              <div className="testimonial-site-logo">
                <img src="/assets/images/footer-logo.svg" alt="Logo" />
              </div>
              <div className="about-customer-rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <div className="about-customer-content">
                <p>
                  Customer Review <Counter value={30000} />
                </p>
              </div>
              <div className="customer-images">
                {customerImages.map((img, index) => (
                  <div key={index} className="customer-img">
                    <RevealImage>
                      <figure className="image-anime">
                        <img src={img} alt={`Customer ${index + 1}`} />
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
            </div>
          </div>

          <div className="col-lg-8">
            {/* Testimonial Slider */}
            <div className="testimonial-slider">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }}
                loop={true}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-item">
                      <div className="testimonial-slider-image">
                        <figure className="image-anime">
                          <img src={testimonial.image} alt={testimonial.author} />
                        </figure>
                      </div>

                      <div className="testimonial-slider-content">
                        <div className="testimonial-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <div className="testimonial-content">
                          <p>"{testimonial.quote}"</p>
                        </div>
                        <div className="author-content">
                          <h3>{testimonial.author}</h3>
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-lg-12">
            {/* Testimonial Company Slider */}
            <div className="testimonial-company-slider">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={5}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 5
                  }
                }}
              >
                {companyLogos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className="company-logo">
                      <img src={logo} alt={`Company ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

