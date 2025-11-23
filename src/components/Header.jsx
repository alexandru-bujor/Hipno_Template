import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { title: 'Pagina principală', link: '/' },
    { title: 'Programare', link: '/programare' },
    { title: 'Consultație', link: '/consultatie' },
    { title: 'Talismanuri și artefacte', link: '/talismanuri' },
    { title: 'Ritualuri', link: '/ritualuri' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contacte', link: '/contacte' }
  ]

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
        <Link to="/" className="react-header-logo" aria-label="Acasă">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </Link>

        {/* Desktop navigation */}
        <nav className="react-nav-desktop" aria-label="Navigare principală">
          <ul>
            {menuItems.map((item) => (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className={`react-nav-link ${
                    location.pathname === item.link ? 'react-nav-link-active' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="react-header-cta-desktop">
          <Link to="/programare" className="btn-default react-header-cta-btn">
            Programare
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
      >
        <div className="react-nav-mobile-inner">
          <div className="react-nav-mobile-header">
            <Link
              to="/"
              className="react-nav-mobile-logo"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img src="/assets/images/logo.svg" alt="Logo" />
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
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`react-nav-mobile-link ${
                      location.pathname === item.link ? 'active' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="react-nav-mobile-footer">
            <Link
              to="/programare"
              className="btn-default react-nav-mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programare
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


