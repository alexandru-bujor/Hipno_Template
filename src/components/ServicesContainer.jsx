import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { getAssetPath } from '../utils/assets'

const services = [
    {
        titleKey: 'services.myPath',
        image: getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg'),
        delay: '0s',
        link: '/services'
    },
    {
        titleKey: 'services.whatIWorkWith',
        image: getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg'),
        delay: '0.2s',
        link: '/whatwedo'
    },
    {
        titleKey: 'ritualuri.title',
        image: getAssetPath('assets/images/hero-images/AdobeStock_183593206.jpeg'),
        delay: '0.4s',
        link: '/ritualuri'
    }/*,
    {
        titleKey: 'magazin.title',
        image: getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg'),
        delay: '0.6s',
        link: '/magazin'
    }*/
]

const ServicesCard = () => {
    const { t } = useLanguage()
    const location = useLocation()
    const navigate = useNavigate()

    const handleServiceClick = (e, service) => {
        e.preventDefault()
        
        // Handle anchor links
        if (service.anchor) {
            if (location.pathname !== '/') {
                navigate('/')
                setTimeout(() => {
                    const element = document.querySelector(service.anchor)
                    if (element) {
                        const headerOffset = 100
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        })
                    }
                }, 300)
            } else {
                const element = document.querySelector(service.anchor)
                if (element) {
                    const headerOffset = 100
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                }
            }
        } else {
            // Regular route navigation
            navigate(service.link)
        }
    }

    return (
        <div id="services" className="our-services"
             style={{
                 paddingBottom: 0,
             }}>
            <div className="container">
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div
                                className="service-item wow fadeInUp"
                                style={{
                                    visibility: 'visible',
                                    animationDelay: service.delay,
                                    animationName: 'fadeInUp'
                                }}
                            >
                                <a href={service.anchor || service.link} onClick={(e) => handleServiceClick(e, service)}>
                                <div className="service-image">
                                        <figure className="image-anime">
                                            <img src={service.image} alt={t(service.titleKey)} />
                                        </figure>
                                </div>
                                <div className="service-content">
                                    <h1>{t(service.titleKey)}</h1>
                                </div>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ServicesCard