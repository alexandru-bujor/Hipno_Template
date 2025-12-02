import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CollapsibleList = ({ items, initialVisible = 3, listStyle = 'default', showSeeMore = true }) => {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleItems = isExpanded ? items : items.slice(0, initialVisible)
  const hasMore = items.length > initialVisible

  const getListClassName = () => {
    const baseClass = 'services-list'
    switch (listStyle) {
      case 'cards':
        return `${baseClass} services-list-cards`
      case 'grid':
        return `${baseClass} services-list-grid`
      case 'minimal':
        return `${baseClass} services-list-minimal`
      default:
        return baseClass
    }
  }

  return (
    <>
      <ul className={getListClassName()}>
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {hasMore && showSeeMore && (
        <button
          className="services-see-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span>{t('buttons.hide')}</span>
              <span className="services-see-more-icon">▲</span>
            </>
          ) : (
            <>
              <span>{t('buttons.seeMore')} ({items.length - initialVisible})</span>
              <span className="services-see-more-icon">▼</span>
            </>
          )}
        </button>
      )}
    </>
  )
}

export default CollapsibleList

