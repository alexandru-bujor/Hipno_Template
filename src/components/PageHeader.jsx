import React, { useState, useEffect } from 'react'
import { getAssetPath } from '../utils/assets'
import { useLanguage } from '../contexts/LanguageContext'

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)
  const bg = backgroundImage ? getAssetPath(backgroundImage) : getAssetPath('assets/images/hero-bg.jpg')

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Use lighter overlay on mobile for clearer image
  const overlayGradient = isMobile 
    ? `linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)`
    : `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)`
  
  return (
    <div 
      className="page-header"
        style={{
          position: 'relative',
          padding: '150px 0 100px',
          background: `${overlayGradient}, url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden'
        }}
    >
      {/* Overlay Pattern - lighter on mobile */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          opacity: isMobile ? 0.1 : 0.6, // Much lighter on mobile
          backdropFilter: isMobile ? 'none' : undefined, // No blur on mobile
          WebkitBackdropFilter: isMobile ? 'none' : undefined
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header-content text-center">
              <h3 
                className="wow fadeInUp"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '15px',
                  opacity: 0.9
                }}
              >

              </h3>
              <h1 
                className="text-anime-style-2 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                {title}
              </h1>
              {/* Breadcrumb */}
              <nav 
                aria-label="breadcrumb"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >

              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1))',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default PageHeader

