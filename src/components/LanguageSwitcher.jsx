import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' }
  ]

  const currentLang = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="language-switcher-flag">{currentLang.flag}</span>
        <span className="language-switcher-text">{currentLang.code.toUpperCase()}</span>
        <span className="language-switcher-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="language-switcher-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher-option ${
                language === lang.code ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-switcher-flag">{lang.flag}</span>
              <span className="language-switcher-name">{lang.name}</span>
              {language === lang.code && (
                <span className="language-switcher-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher

