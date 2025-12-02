import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { getAssetPath } from '../utils/assets'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const Hero = () => {
  const heroSlides = [
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg'),
      subtitle: 'Bine ai venit',
      title: 'Transformare spirituală și vindecare',
      description: 'Descoperă puterea transformării spirituale și găsește pacea interioară prin serviciile noastre specializate de consultanță și ritualuri.'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg'),
      subtitle: 'Consultație personalizată',
      title: 'Servicii adaptate nevoilor tale',
      description: 'Oferim consultații personalizate și ritualuri tradiționale pentru a-ți ajuta să găsești echilibrul și armonia în viață.'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_183593206.jpeg'),
      subtitle: 'Talismanuri și artefacte',
      title: 'Putere spirituală autentică',
      description: 'Descoperă colecția noastră de talismanuri și artefacte cu putere spirituală dovedită pentru protecție și transformare.'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg'),
      subtitle: 'Ritualuri tradiționale',
      title: 'Transformare profundă',
      description: 'Ritualuri tradiționale și moderne pentru purificare, protecție și transformare spirituală profundă.'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg'),
      subtitle: 'Echilibru și armonie',
      title: 'Călătoria ta către bunăstare',
      description: 'Te ghidăm pe calea către echilibru spiritual, armonie interioară și o viață plină de sens și împlinire.'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg'),
      subtitle: 'Sănătate mentală',
      title: 'Sprijin complet pentru transformare',
      description: 'Oferim sprijin complet pentru sănătatea ta mentală și spirituală prin metode dovedite și tradiționale.'
    }
  ]

  return (
    <div className="hero hero-slider-layout">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        effect="fade"
        loop={true}
        className="hero-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">
              {/* Slider Image */}
              <div className="hero-slider-image">
                <img src={slide.image} alt={slide.title} />
              </div>

              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    {/* Hero Content */}
                    <div className="hero-content">
                      {/* Section Title */}
                      <div className="section-title">
                        <h3 className="wow fadeInUp">{slide.subtitle}</h3>
                        <h1 className="text-anime-style-2" data-cursor="-opaque">
                          {slide.title}
                        </h1>
                        <p className="wow fadeInUp" data-wow-delay="0.2s">
                          {slide.description}
                        </p>
                      </div>

                      {/* Hero Content Body */}
                      <div className="hero-content-body">
                        {/* Hero Button */}
                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                          <Link to="/programare" className="btn-default">
                            Programare
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero

