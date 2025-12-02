import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

const Footer = () => {
  const socialLinks = [
    { icon: 'fa-brands fa-pinterest-p', link: '#' },
    { icon: 'fa-brands fa-x-twitter', link: '#' },
    { icon: 'fa-brands fa-facebook-f', link: '#' },
    { icon: 'fa-brands fa-instagram', link: '#' }
  ]

  const footerMenu = [
    { title: 'Pagina principală', link: '/' },
    { title: 'Programare', link: '/programare' },
    { title: 'Consultație', link: '/consultatie' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contacte', link: '/contacte' }
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
                    Obține o consultație gratuită
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
                <img src={getAssetPath('assets/images/footer-logo.svg')} alt="Logo" />
              </div>
            </div>

            <div className="col-lg-8">
              {/* About Footer */}
              <div className="about-footer">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Suntem aici când ești gata
                  </h2>
                </div>

                {/* Footer Contact Box */}
                <div className="footer-contact-box">
                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>Phone Number</p>
                    <h3>0761-8523-398</h3>
                  </div>

                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>Email Address</p>
                    <h3>info@domainname.com</h3>
                  </div>

                  {/* Footer Contact Item */}
                  <div className="footer-contact-item">
                    <p>Location</p>
                    <h3>123 High Street LN1 1AB United Kingdom</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Footer Social Link */}
              <div className="footer-social-links">
                <h3>Alătură-te comunității noastre</h3>
                <p>Alătură-te astăzi pentru resurse, perspective și conexiune</p>
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
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                {/* Footer Copyright */}
                <div className="footer-copyright-text">
                  <p>Copyright © 2024 Toate drepturile rezervate.</p>
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

