import React from 'react'

const SectionWrapper = ({ id, className, bgUrl, children }) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrapper-outer">
        <div className="wrapper-inner">
          <div 
            className="background" 
            style={{ 
              backgroundImage: bgUrl || 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="section-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper

