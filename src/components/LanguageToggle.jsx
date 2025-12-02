import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-toggle-header">
      <button
        className={language === 'ro' ? 'active' : ''}
        onClick={() => setLanguage('ro')}
      >
        RO
      </button>
      <button
        className={language === 'ru' ? 'active' : ''}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
    </div>
  )
}

export default LanguageToggle

