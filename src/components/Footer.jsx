import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const footerMenu = [
    { key: 'home', link: '/' },
    { key: 'programare', link: '/programare' },
    { key: 'donations.title', link: '/donations' },
    { key: 'contacte', link: '/contacte' }
  ]

  return (
    <>
      {/* Footer Copyright Section Only */}
      <footer className="main-footer">
        <div className="container">
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
                          <Link to={item.link}>{t(item.key === 'donations.title' ? 'donations.title' : `nav.${item.key}`)}</Link>
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

