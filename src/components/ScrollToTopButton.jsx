import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(null)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const sections = [
      { id: 'services', name: t('nav.services') },
      { id: 'talismanuri', name: t('nav.talismanuri') },
      { id: 'ritualuri', name: t('nav.ritualuri') },
      { id: 'magazin', name: t('nav.magazin') },
      { id: 'contacte', name: t('nav.contacte') }
    ]

    const handleScroll = () => {
      // Show button when scrolled down
      setIsVisible(window.scrollY > 300)

      // Detect current section
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 150 // Offset for header
        let activeSection = null

        sections.forEach((section) => {
          const element = document.getElementById(section.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + window.scrollY
            const elementBottom = elementTop + rect.height

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              activeSection = section
            }
          }
        })

        setCurrentSection(activeSection)
      } else {
        setCurrentSection(null)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname, t])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div className="scroll-to-top-button">
      {currentSection && (
        <div className="scroll-to-top-section-indicator">
          <span>{currentSection.name}</span>
        </div>
      )}
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTopButton

