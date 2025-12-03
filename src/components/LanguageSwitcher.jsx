import React, { useState, useRef, useEffect, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' }
  ]

  // Normalize language code to prevent duplication - always ensure exactly 2 characters
  const normalizedLanguage = useMemo(() => {
    if (!language) return 'ru'
    let normalized = String(language).trim().toLowerCase()
    
    // Handle patterns like "ruru", "roro", etc.
    if (normalized.length === 4 && normalized.substring(0, 2) === normalized.substring(2, 4)) {
      // It's "ruru" or "roro", extract first 2 chars
      normalized = normalized.substring(0, 2)
    } else if (normalized.length > 2) {
      // Take only first 2 characters
      normalized = normalized.substring(0, 2)
    }
    
    // Handle invalid 2-char codes
    if (normalized === 'rr' || normalized === 'oo') {
      normalized = normalized[0] === 'r' ? 'ru' : 'ro'
    }
    
    // Ensure it's a valid language code
    return (normalized === 'ru' || normalized === 'ro') ? normalized : 'ru'
  }, [language])
  
  const currentLang = languages.find(lang => lang.code === normalizedLanguage) || languages[0]
  
  // Force ensure display code is exactly 2 characters - prevent any duplication
  const displayCode = useMemo(() => {
    const code = currentLang?.code || 'ru'
    // Always take only first 2 characters and uppercase
    const cleanCode = String(code).trim().toLowerCase().substring(0, 2)
    // Ensure it's valid
    if (cleanCode === 'ru' || cleanCode === 'ro') {
      return cleanCode.toUpperCase()
    }
    return 'RU'
  }, [currentLang])

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
        <span className="language-switcher-text">{displayCode}</span>
        <span className="language-switcher-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="language-switcher-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher-option ${
                normalizedLanguage === lang.code ? 'active' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-switcher-name">{lang.name}</span>
              {normalizedLanguage === lang.code && (
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

