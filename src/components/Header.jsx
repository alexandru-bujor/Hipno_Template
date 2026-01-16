import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(location.pathname !== '/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navigate = useNavigate()
  const { t } = useLanguage()

  const menuItems = [
    { key: 'nav.home', link: '/' },
    { key: 'services.myPath', link: '/services'},
    { key: 'services.whatIWorkWith', link: '/whatwedo' },
    { key: 'ritualuri.title', link: '/ritualuri' },
    { key: 'donations.title', link: '/donations' }
  ]

  // Handle smooth scroll to anchor or home
  const handleNavClick = (e, item) => {
      e.preventDefault()
      setIsMobileMenuOpen(false)
      
    // If home link, scroll to top
    if (item.key === 'nav.home' && item.link === '/') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }, 300)
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
      return
    }
    
    // Handle anchor links
    if (item.anchor) {
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

  // Set scrolled state based on pathname - all non-home pages should show scrolled header
  useEffect(() => {
    if (false) {
      setIsScrolled(false)
    } else {
      setIsScrolled(window.scrollY > 40)
    }
  }, [location.pathname])

  // Track scroll to apply subtle shadow / background on desktop and detect active section
  useEffect(() => {
    const onScroll = () => {
      // Keep scrolled state true on all non-home pages, otherwise check scroll position
      if (false) {
        setIsScrolled(false)
      } else {
        setIsScrolled(window.scrollY > 40)
      }

      // Only detect active sections on home page
      if (false) {
        setActiveSection('')
        return
      }
      
      // Get all sections with anchors (excluding home, which is handled separately)
      const sections = [
        { key: 'services', anchor: '#services' }
      ]
      
      const scrollPosition = window.scrollY + 150 // Offset for header
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if at top (home section)
      if (scrollPosition < 300) {
        setActiveSection('nav.home')
        return
      }
      
      // Check each section from bottom to top
      let currentActive = 'nav.home' // Default to home if no section is detected
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.querySelector(section.anchor)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          
          // If we've scrolled past the section start (with offset)
          if (scrollPosition >= elementTop - 200) {
            currentActive = section.key
            break
          }
        }
      }
      
      // If near bottom of page, activate last section
      if (scrollPosition + windowHeight >= documentHeight - 100 && sections.length > 0) {
        currentActive = sections[sections.length - 1].key
      }
      
      setActiveSection(currentActive)
    }
    
    window.addEventListener('scroll', onScroll)
    onScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

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
                {(item.anchor || item.key === 'nav.home') && location.pathname === '/' ? (
                  <a
                    href={item.anchor || item.link}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`react-nav-link ${
                      activeSection === item.key || (item.key === 'nav.home' && activeSection === 'nav.home') ? 'react-nav-link-active' : ''
                    }`}
                  >
                    {t(`${item.key}`)}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    onClick={(e) => item.key === 'nav.home' && handleNavClick(e, item)}
                    className={`react-nav-link ${
                      location.pathname === item.link || (item.key === 'nav.home' && activeSection === 'nav.home' && location.pathname === '/') ? 'react-nav-link-active' : ''
                    }`}
                  >
                    {t(`${item.key}`)}
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
          <Link to="/donations" className="btn-default react-header-cta-btn">
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
              <Link to="/" className="react-header-logo">
          <span className="react-header-logo-text">
            <span className="react-header-logo-part">Fion</span>
            <span className="react-header-logo-part-accent">Golden</span>
          </span>
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
                  {(item.anchor || item.key === 'nav.home') && location.pathname === '/' ? (
                    <a
                      href={item.anchor || item.link}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`react-nav-mobile-link ${
                        activeSection === item.key || (item.key === 'nav.home' && activeSection === 'nav.home') ? 'active' : ''
                      }`}
                    >
                      {t(`${item.key}`)}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={(e) => {
                        if (item.key === 'home') {
                          handleNavClick(e, item)
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                      className={`react-nav-mobile-link ${
                        location.pathname === item.link || (item.key === 'nav.home' && activeSection === 'nav.home' && location.pathname === '/') ? 'active' : ''
                      }`}
                    >
                      {t(`${item.key}`)}
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
              to="/donations"
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


