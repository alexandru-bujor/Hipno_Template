import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../context/LanguageContext'
import SectionWrapper from '../components/SectionWrapper'
import LanguageToggle from '../components/LanguageToggle'
import FionGoldenSection1 from '../components/FionGoldenSection1'
import FionGoldenSection2 from '../components/FionGoldenSection2'
import FionGoldenSection3 from '../components/FionGoldenSection3'
import FionGoldenSection4 from '../components/FionGoldenSection4'
import ContactSection from '../components/ContactSection'
import { getAssetPath } from '../utils/assets'

const Home = () => {
  const { language } = useLanguage()
  const sectionsRef = useRef([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigateRef = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const images = document.querySelectorAll('.background')
    const headings = document.querySelectorAll('.section-title-main, .section-title')
    const outerWrappers = document.querySelectorAll('.wrapper-outer')
    const innerWrappers = document.querySelectorAll('.wrapper-inner')
    let currentIndex = -1
    let animating = false

    const wrap = (index, max) => (index + max) % max

    gsap.set(outerWrappers, { yPercent: 100 })
    gsap.set(innerWrappers, { yPercent: -100 })

    function gotoSection(index, direction) {
      index = wrap(index, sections.length)
      animating = true

      // Reset scroll of current section before leaving
      if (currentIndex >= 0) {
        const currentScrollable = sections[currentIndex]?.querySelector('.section-content')
        if (currentScrollable) {
          currentScrollable.scrollTop = 0
        }
      }

      const fromTop = direction === -1
      const dFactor = fromTop ? -1 : 1

      const tl = gsap.timeline({
        defaults: { duration: 1.4, ease: 'expo.out' },
        onComplete: () => {
          animating = false
          // Reset scroll of new section after animation
          const newScrollable = sections[index]?.querySelector('.section-content')
          if (newScrollable) {
            newScrollable.scrollTop = 0
          }
        }
      })

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 })
        tl.to(images[currentIndex], { 
          yPercent: -5 * dFactor,
          opacity: 0.5,
          scale: 1.01,
          duration: 1.4,
          ease: 'expo.in'
        }, 0)
          .to(sections[currentIndex], {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power1.in'
          }, 0.7)
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 })

      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { 
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
          opacity: 0
        },
        { 
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out'
        },
        0.2
      )
        .fromTo(
          images[index], 
          { 
            yPercent: 5 * dFactor,
            scale: 0.99,
            opacity: 0
          }, 
          { 
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'expo.out'
          }, 
          0.3
        )
        .fromTo(
          headings[index],
          { 
            autoAlpha: 0, 
            yPercent: 15 * dFactor,
            opacity: 0
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'expo.out',
            stagger: { 
              each: 0.08, 
              from: 'start',
              ease: 'expo.out'
            }
          },
          0.5
        )

      currentIndex = index
    }

    function navigateSectionById(id) {
      const index = Array.from(sections).findIndex((section) => section.id === id)
      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1)
      }
    }

    // Store navigation function in ref for JSX access
    navigateRef.current = navigateSectionById

    // Detect if device is mobile/touch
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || 'ontouchstart' in window

    function canScroll(element) {
      if (!element) return false
      return element.scrollHeight > element.clientHeight + 20
    }

    function isAtTop(element) {
      if (!element) return true
      return element.scrollTop <= 15
    }

    function isAtBottom(element) {
      if (!element) return true
      const threshold = 15
      return element.scrollTop + element.clientHeight >= element.scrollHeight - threshold
    }

    function getCurrentScrollableElement() {
      const currentSection = sections[currentIndex]
      if (!currentSection) return null
      const sectionContent = currentSection.querySelector('.section-content')
      return sectionContent
    }

    // Mobile touch handling
    let touchStartY = 0
    let touchEndY = 0
    let touchStartTime = 0
    let lastTouchTime = 0
    const SWIPE_THRESHOLD = 50 // Minimum swipe distance
    const SWIPE_TIME = 300 // Maximum swipe time in ms

    const handleTouchStart = (e) => {
      if (animating) return
      touchStartY = e.touches[0].clientY
      touchStartTime = Date.now()
    }

    const handleTouchMove = (e) => {
      if (animating) return
      const scrollable = getCurrentScrollableElement()
      
      // Allow normal scrolling within section
      if (scrollable && canScroll(scrollable)) {
        const scrollTop = scrollable.scrollTop
        const scrollHeight = scrollable.scrollHeight
        const clientHeight = scrollable.clientHeight
        const touchY = e.touches[0].clientY
        const deltaY = touchStartY - touchY

        // Prevent section transition if scrolling within content
        if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight - 10) {
          return // Allow normal scroll
        }

        // At top and trying to scroll up, or at bottom and trying to scroll down
        if ((isAtTop(scrollable) && deltaY < 0) || (isAtBottom(scrollable) && deltaY > 0)) {
          e.preventDefault()
        }
      }
    }

    const handleTouchEnd = (e) => {
      if (animating) return
      
      touchEndY = e.changedTouches[0].clientY
      const touchEndTime = Date.now()
      const swipeDistance = touchStartY - touchEndY
      const swipeTime = touchEndTime - touchStartTime

      // Check for quick swipe gesture
      if (Math.abs(swipeDistance) > SWIPE_THRESHOLD && swipeTime < SWIPE_TIME) {
        const scrollable = getCurrentScrollableElement()
        
        if (scrollable && canScroll(scrollable)) {
          // Only transition if at boundary
          if (swipeDistance > 0 && isAtBottom(scrollable)) {
            // Swipe up at bottom -> next section
            e.preventDefault()
            gotoSection(currentIndex + 1, 1)
          } else if (swipeDistance < 0 && isAtTop(scrollable)) {
            // Swipe down at top -> previous section
            e.preventDefault()
            gotoSection(currentIndex - 1, -1)
          }
        } else {
          // No scrollable content, allow swipe navigation
          e.preventDefault()
          if (swipeDistance > 0) {
            gotoSection(currentIndex + 1, 1)
          } else if (swipeDistance < 0) {
            gotoSection(currentIndex - 1, -1)
          }
        }
      }
    }

    // Desktop wheel/trackpad handling
    let wheelTimeout = null
    let lastWheelDelta = 0
    let wheelAccumulator = 0
    const WHEEL_THRESHOLD = 100 // Higher threshold for smoother, less sensitive transitions
    const WHEEL_DEBOUNCE = 400 // Longer debounce to prevent rapid transitions

    const handleWheel = (event) => {
      if (animating) {
        event.preventDefault()
        return
      }

      const deltaY = event.deltaY
      const scrollingDown = deltaY > 0
      const scrollingUp = deltaY < 0
      const absDelta = Math.abs(deltaY)

      const scrollable = getCurrentScrollableElement()
      
      if (scrollable && canScroll(scrollable)) {
        // Section has scrollable content
        // Check current scroll position
        const scrollTop = scrollable.scrollTop
        const scrollHeight = scrollable.scrollHeight
        const clientHeight = scrollable.clientHeight
        const maxScroll = scrollHeight - clientHeight
        
        // Check if we're at boundaries with some tolerance
        const atBottom = scrollTop >= maxScroll - 20
        const atTop = scrollTop <= 20
        
        // Clear any pending timeout
        if (wheelTimeout) {
          clearTimeout(wheelTimeout)
          wheelAccumulator = 0
        }
        
        // If at boundary and trying to scroll past it
        if (scrollingDown && atBottom) {
          // Accumulate scroll delta
          wheelAccumulator += absDelta
          
          // Only transition if accumulated enough scroll
          if (wheelAccumulator > WHEEL_THRESHOLD) {
            event.preventDefault()
            wheelAccumulator = 0
            gotoSection(currentIndex + 1, 1)
          }
        } else if (scrollingUp && atTop) {
          // Accumulate scroll delta
          wheelAccumulator += absDelta
          
          // Only transition if accumulated enough scroll
          if (wheelAccumulator > WHEEL_THRESHOLD) {
            event.preventDefault()
            wheelAccumulator = 0
            gotoSection(currentIndex - 1, -1)
          }
        } else {
          // Not at boundary - allow normal scrolling
          wheelAccumulator = 0
          // Don't prevent default - let browser handle scroll
        }
        
      } else {
        // No scrollable content - use debounced navigation
        wheelAccumulator += absDelta
        
        // Clear previous timeout
        if (wheelTimeout) {
          clearTimeout(wheelTimeout)
        }
        
        // Prevent default to stop page scroll
        event.preventDefault()
        
        // Debounce: wait for scroll gesture to complete
        wheelTimeout = setTimeout(() => {
          if (wheelAccumulator > WHEEL_THRESHOLD && !animating) {
            if (scrollingDown) {
              gotoSection(currentIndex + 1, 1)
            } else if (scrollingUp) {
              gotoSection(currentIndex - 1, -1)
            }
          }
          wheelAccumulator = 0
        }, WHEEL_DEBOUNCE)
      }
    }

    // Add event listeners based on device type
    if (isMobile) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true })
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd, { passive: false })
    } else {
      window.addEventListener('wheel', handleWheel, { passive: false })
    }

    document.querySelectorAll('nav a').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault()
        navigateSectionById(e.currentTarget.getAttribute('href').slice(1))
      })
    })

      gotoSection(0, 1)

    return () => {
      if (isMobile) {
        document.removeEventListener('touchstart', handleTouchStart)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      } else {
        window.removeEventListener('wheel', handleWheel)
      }
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
    }
  }, [])

  return (
    <div className="app-container">
      <header className={`header-fixed ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        {/* Mobile burger button */}
        <button
          type="button"
          className="header-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
        >
          <span className={`header-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`header-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`header-toggle-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Desktop navigation */}
        <nav className="header-nav-desktop">
          <a href="#section1" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section1'); setIsMobileMenuOpen(false); }}>Despre</a>
          <a href="#section2" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section2'); setIsMobileMenuOpen(false); }}>Servicii</a>
          <a href="#section3" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section3'); setIsMobileMenuOpen(false); }}>Listă</a>
          <a href="#section4" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section4'); setIsMobileMenuOpen(false); }}>Magazin</a>
          <a href="#section5" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section5'); setIsMobileMenuOpen(false); }}>Contact</a>
        </nav>

        <LanguageToggle />

        {/* Mobile menu overlay */}
        <div className={`header-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav className="header-nav-mobile">
            <a href="#section1" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section1'); setIsMobileMenuOpen(false); }}>Despre</a>
            <a href="#section2" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section2'); setIsMobileMenuOpen(false); }}>Servicii</a>
            <a href="#section3" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section3'); setIsMobileMenuOpen(false); }}>Listă</a>
            <a href="#section4" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section4'); setIsMobileMenuOpen(false); }}>Magazin</a>
            <a href="#section5" onClick={(e) => { e.preventDefault(); navigateRef.current?.('section5'); setIsMobileMenuOpen(false); }}>Contact</a>
          </nav>
        </div>
      </header>

      <SectionWrapper
        id="section1"
        className="first"
        bgUrl={`url(${getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg')})`}
      >
        <FionGoldenSection1 />
      </SectionWrapper>

      <SectionWrapper
        id="section2"
        className="second"
        bgUrl={`url(${getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg')})`}
      >
        <FionGoldenSection2 />
      </SectionWrapper>

      <SectionWrapper
        id="section3"
        className="third"
        bgUrl={`url(${getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg')})`}
      >
        <FionGoldenSection3 />
      </SectionWrapper>

      <SectionWrapper
        id="section4"
        className="fourth"
        bgUrl={`url(${getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg')})`}
      >
        <FionGoldenSection4 />
      </SectionWrapper>

      <SectionWrapper
        id="section5"
        className="fifth"
        bgUrl={`url(${getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg')})`}
      >
        <ContactSection language={language} />
      </SectionWrapper>
    </div>
  )
}

export default Home
