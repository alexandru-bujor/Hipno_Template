import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()

  const menuItems = [
    { key: 'home', link: '/' },
    { key: 'caleaMea', link: '/', anchor: '#ritualuri' },
      { key: 'services', link: '/', anchor: '#services' },
    { key: 'magazin', link: '/', anchor: '#magazin' }
  ]

  // Handle smooth scroll to anchor
  const handleAnchorClick = (e, item) => {
    if (item.anchor) {
      e.preventDefault()
      setIsMobileMenuOpen(false)
      
      // If not on home page, navigate first
      if (location.pathname !== '/') {
        navigate('/')
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.querySelector(item.anchor)
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
        // Already on home page, just scroll
        const element = document.querySelector(item.anchor)
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
    }
  }

  // Track scroll to apply subtle shadow / background on desktop
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`main-header react-header ${isScrolled ? 'react-header-scrolled' : ''} ${
        isMobileMenuOpen ? 'react-header-menu-open' : ''
      }`}
    >
      <div className="react-header-inner">
        {/* Logo */}
        <Link to="/" className="react-header-logo">
          <span className="react-header-logo-text">
            <span className="react-header-logo-part">Fion</span>
            <span className="react-header-logo-part-accent">Golden</span>
          </span>
        </Link>



        {/* Desktop navigation */}
        <nav className="react-nav-desktop" aria-label="Navigare principală">
          <ul>
            {menuItems.map((item) => (
              <li key={item.link + (item.anchor || '')}>
                {item.anchor && location.pathname === '/' ? (
                  <a
                    href={item.anchor}
                    onClick={(e) => handleAnchorClick(e, item)}
                    className="react-nav-link"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className={`react-nav-link ${
                      location.pathname === item.link ? 'react-nav-link-active' : ''
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Language Switcher */}
        <div className="react-header-language">
          <LanguageSwitcher />
        </div>

        {/* Desktop CTA */}
        <div className="react-header-cta-desktop">
          <Link to="/programare" className="btn-default react-header-cta-btn">
            {t('nav.programare')}
          </Link>
          <Link to="/payment" className="btn-default react-header-cta-btn">
            {t('nav.payment')}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          className={`react-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
        >
          <span className="react-nav-toggle-box">
            <span className="react-nav-toggle-line" />
            <span className="react-nav-toggle-line" />
            <span className="react-nav-toggle-line" />
          </span>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`react-nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
        onClick={(e) => {
          // Close menu when clicking on the overlay (not on inner content)
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false)
          }
        }}
      >
        <div className="react-nav-mobile-inner" onClick={(e) => e.stopPropagation()}>
          <div className="react-nav-mobile-header">
            <Link
              to="/"
              className="react-nav-mobile-logo"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src={getAssetPath('assets/images/logo.svg')} alt="Logo" />
            </Link>
            <button
              type="button"
              className="react-nav-mobile-close"
              aria-label="Închide meniul"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="react-nav-mobile-menu" aria-label="Navigare principală (mobil)">
            <ul>
              {menuItems.map((item) => (
                <li key={item.link + (item.anchor || '')}>
                  {item.anchor && location.pathname === '/' ? (
                    <a
                      href={item.anchor}
                      onClick={(e) => handleAnchorClick(e, item)}
                      className="react-nav-mobile-link"
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className={`react-nav-mobile-link ${
                        location.pathname === item.link ? 'active' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="react-nav-mobile-footer">
            <div className="react-nav-mobile-language">
              <LanguageSwitcher />
            </div>
            <Link
              to="/programare"
              className="btn-default react-nav-mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.programare')}
            </Link>
            <Link
              to="/payment"
              className="btn-default react-nav-mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.payment')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


