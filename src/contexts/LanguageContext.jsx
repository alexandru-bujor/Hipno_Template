import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get from localStorage or default to Russian
    const stored = localStorage.getItem('language') || 'ru'
    
    // Normalize language code - always take first 2 characters and validate
    let normalized = stored.trim().toLowerCase()
    
    // If it's longer than 2 characters, take only first 2
    if (normalized.length > 2) {
      normalized = normalized.substring(0, 2)
    }
    
    // If it's exactly 2 characters but duplicated (like "ruru" -> "ru", "roro" -> "ro")
    // Check if first char equals second char, if so it's likely a duplicate pattern
    if (normalized.length === 2 && normalized[0] === normalized[1]) {
      // It's a duplicate like "rr" or "oo", take just one character and default
      normalized = normalized[0] === 'r' ? 'ru' : 'ro'
    }
    
    // Ensure it's a valid language code
    if (normalized !== 'ru' && normalized !== 'ro') {
      normalized = 'ru'
    }
    
    // Save normalized value back if it was corrupted
    if (normalized !== stored) {
      localStorage.setItem('language', normalized)
    }
    
    return normalized
  })

  // One-time cleanup on mount to fix any corrupted localStorage values
  useEffect(() => {
    const stored = localStorage.getItem('language')
    if (stored) {
      const trimmed = stored.trim().toLowerCase()
      // Handle patterns like "ruru", "roro", "rururu", etc.
      let normalized = trimmed
      if (trimmed.length > 2) {
        // Check if it's a repeating pattern (like "ruru" or "roro")
        if (trimmed.length === 4 && trimmed.substring(0, 2) === trimmed.substring(2, 4)) {
          // It's "ruru" or "roro", extract first 2 chars
          normalized = trimmed.substring(0, 2)
        } else {
          // Just take first 2 characters
          normalized = trimmed.substring(0, 2)
        }
      }
      // Handle invalid 2-char codes like "rr" or "oo"
      if (normalized === 'rr' || normalized === 'oo') {
        normalized = normalized[0] === 'r' ? 'ru' : 'ro'
      }
      // Ensure it's valid
      const finalLang = (normalized === 'ru' || normalized === 'ro') ? normalized : 'ru'
      if (finalLang !== stored) {
        localStorage.setItem('language', finalLang)
        setLanguage(finalLang)
      }
    }
  }, []) // Run only once on mount

  useEffect(() => {
    // Always ensure language is normalized before saving
    const normalized = language.trim().toLowerCase().substring(0, 2)
    const finalLang = (normalized === 'ru' || normalized === 'ro') ? normalized : 'ru'
    localStorage.setItem('language', finalLang)
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to Russian if translation missing
        let fallback = translations.ru
        for (const fk of keys) {
          fallback = fallback?.[fk]
        }
        return fallback || key
      }
    }
    
    return value || key
  }

  const changeLanguage = (lang) => {
    // Normalize language code to ensure it's only 2 characters
    const normalized = lang.length === 2 ? lang : lang.slice(0, 2)
    // Only set if it's a valid language code
    if (normalized === 'ru' || normalized === 'ro') {
      setLanguage(normalized)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

