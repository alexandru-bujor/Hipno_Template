import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  
  const socialLinks = [
    { icon: 'fa-brands fa-pinterest-p', link: '#' },
    { icon: 'fa-brands fa-x-twitter', link: '#' },
    { icon: 'fa-brands fa-facebook-f', link: '#' },
    { icon: 'fa-brands fa-instagram', link: '#' }
  ]

  const footerMenu = [
    { key: 'home', link: '/' },
    { key: 'programare', link: '/programare' },
    { key: 'magazin', link: '/', anchor: '#magazin' },
    { key: 'contacte', link: '/contacte' }
  ]

  return (
    <>
      {/* Footer CTA Box */}
      <div className="footer-cta-box">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Footer CTA Content */}
              <div className="footer-cta-content">
                {/* Section Title */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t('footer.cta.title')}
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Footer CTA Button */}
              <div className="footer-cta-btn wow fadeInUp">
                <a href="tel:+01789859664" className="btn-default btn-phone">
                  <i className="fa-solid fa-phone-volume"></i> +01 789 859 664
                </a>
                <a href="tel:+01789859664" className="btn-default btn-comment">
                  <i className="fa-solid fa-comment-dots"></i> +01 789 859 664
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Footer Logo */}
              <div className="footer-logo">
                <Link to="/" className="footer-logo-text">
                  <span className="footer-logo-part">Fion</span>
                  <span className="footer-logo-part-accent">Golden</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-8">
              {/* About Footer */}
              <div className="about-footer">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    {t('footer.title')}
                  </h2>
                </div>

                {/* Footer Contact Box */}
                <div className="footer-contact-box">
                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>{t('footer.contact.phoneLabel')}</p>
                    <h3>{t('footer.contact.phone')}</h3>
                  </div>

                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>{t('footer.contact.emailLabel')}</p>
                    <h3>{t('footer.contact.email')}</h3>
                  </div>

                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>{t('footer.contact.locationLabel')}</p>
                    <h3>{t('footer.contact.location')}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Footer Social Link */}
              <div className="footer-social-links">
                <h3>{t('footer.social.title')}</h3>
                <p>{t('footer.social.description')}</p>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.link}>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Copyright Section */}
          <div className="footer-copyright">
            <div className="row align-items-center">
              <div className="col-md-6">
                {/* Footer Menu */}
                <div className="footer-menu">
                  <ul>
                    {footerMenu.map((item, index) => (
                      <li key={index}>
                        {item.anchor ? (
                          <a href={item.anchor}>{t(`nav.${item.key}`)}</a>
                        ) : (
                          <Link to={item.link}>{t(`nav.${item.key}`)}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                {/* Footer Copyright */}
                <div className="footer-copyright-text">
                  <p>{t('footer.copyright')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

