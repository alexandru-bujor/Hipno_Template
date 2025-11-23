import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useAnimations = () => {
  const location = useLocation()
  const initializedRef = useRef(false)
  const scrollTriggersRef = useRef([])

  useEffect(() => {
    // Cleanup function
    const cleanup = () => {
      // Kill all GSAP ScrollTriggers
      if (window.ScrollTrigger) {
        scrollTriggersRef.current.forEach(trigger => {
          try {
            trigger.kill()
          } catch (e) {}
        })
        scrollTriggersRef.current = []
        window.ScrollTrigger.getAll().forEach(trigger => {
          try {
            trigger.kill()
          } catch (e) {}
        })
      }

      // Destroy WOW.js instance
      if (window.wowInstance) {
        try {
          // Remove all animated classes
          document.querySelectorAll('.wow.animated').forEach(el => {
            el.classList.remove('animated')
          })
          window.wowInstance = null
        } catch (e) {}
      }

      // Reset animation flags
      document.querySelectorAll('[data-animated]').forEach(el => {
        delete el.dataset.animated
      })
      document.querySelectorAll('[data-revealed]').forEach(el => {
        delete el.dataset.revealed
      })
    }

    // Cleanup on route change
    cleanup()

    const initializeAnimations = () => {
      // Wait for all scripts to be loaded
      const init = () => {
        if (typeof window === 'undefined') return

        const $ = window.jQuery
        if (!$) {
          setTimeout(init, 100)
          return
        }

        // Prevent multiple initializations
        if (initializedRef.current) return
        initializedRef.current = true

        // Initialize WOW.js for scroll animations - Optimized
        if (window.WOW) {
          // Destroy existing instance first
          if (window.wowInstance) {
            try {
              // Reset all wow elements
              document.querySelectorAll('.wow').forEach(el => {
                el.classList.remove('animated')
                el.style.visibility = 'hidden'
              })
            } catch (e) {}
          }
          
          window.wowInstance = new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: false,
            callback: function(box) {
              if (box && box.style) {
                box.style.willChange = 'transform, opacity'
                box.style.transform = 'translateZ(0)'
              }
            },
            scrollContainer: null
          })
          window.wowInstance.init()
        }

        // Initialize counter animations
        if ($.fn.counterUp && $.fn.waypoint) {
          $('.counter').each(function() {
            const $this = $(this)
            if (!$this.data('counter-initialized')) {
              $this.waypoint(function() {
                $this.counterUp({
                  delay: 10,
                  time: 2000
                })
                $this.data('counter-initialized', true)
              }, {
                offset: '75%'
              })
            }
          })
        }

        // Initialize text animations with GSAP - Only once per element
        if (window.gsap && window.SplitText && window.ScrollTrigger) {
          const textElements = document.querySelectorAll('.text-anime-style-2')
          textElements.forEach((element) => {
            // Skip if already animated
            if (element.dataset.animated === 'true') return
            
            // Check if ScrollTrigger already exists for this element
            const existingTriggers = window.ScrollTrigger.getAll()
            const hasTrigger = existingTriggers.some(trigger => trigger.vars && trigger.vars.trigger === element)
            if (hasTrigger) {
              element.dataset.animated = 'true'
              return
            }
            
            try {
              const splitText = new window.SplitText(element, { type: 'chars, words' })
              const trigger = window.gsap.from(splitText.chars, {
                duration: 1,
                delay: 0.1,
                x: 20,
                autoAlpha: 0,
                stagger: 0.03,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true, // Only animate once
                  id: `text-anime-${element.getAttribute('data-id') || Math.random()}`
                }
              })
              if (trigger.scrollTrigger) {
                scrollTriggersRef.current.push(trigger.scrollTrigger)
              }
              element.dataset.animated = 'true'
            } catch (e) {
              console.warn('Text animation error:', e)
            }
          })
        }

        // Initialize image reveal animations - Only once per element
        if (window.gsap && window.ScrollTrigger) {
          const revealElements = document.querySelectorAll('.reveal')
          revealElements.forEach((element) => {
            // Skip if already animated
            if (element.dataset.revealed === 'true') return
            
            // Check if ScrollTrigger already exists for this element
            const existingTriggers = window.ScrollTrigger.getAll()
            const hasTrigger = existingTriggers.some(trigger => trigger.vars && trigger.vars.trigger === element)
            if (hasTrigger) {
              element.dataset.revealed = 'true'
              return
            }
            
            try {
              const trigger = window.gsap.from(element, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                  once: true, // Only animate once
                  id: `reveal-${element.getAttribute('data-id') || Math.random()}`
                }
              })
              if (trigger.scrollTrigger) {
                scrollTriggersRef.current.push(trigger.scrollTrigger)
              }
              element.dataset.revealed = 'true'
            } catch (e) {
              console.warn('Reveal animation error:', e)
            }
          })
        }

        // Initialize parallax effects
        if ($.fn.parallaxie) {
          $('.parallaxie').parallaxie({
            speed: 0.5,
            offset: 0
          })
        }

        // Initialize Magnific Popup for videos
        if ($.fn.magnificPopup) {
          $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          })
        }

        // Initialize SlickNav for mobile menu
        if ($.fn.slicknav) {
          const $menu = $('#menu')
          if ($menu.length && !$menu.data('slicknav')) {
            $menu.slicknav({
              prependTo: '.responsive-menu',
              label: '',
              closedSymbol: '<i class="fa fa-angle-right"></i>',
              openedSymbol: '<i class="fa fa-angle-down"></i>'
            })
          }
        }

        // Initialize Magic Cursor
        if (window.MagicCursor) {
          try {
            new window.MagicCursor({
              container: 'body',
              speed: 0.3,
              ease: 'cubic-bezier(0.23, 1, 0.32, 1)'
            })
          } catch (e) {
            console.warn('Magic cursor initialization error:', e)
          }
        }

        // Initialize Smooth Scroll
        if (window.SmoothScroll) {
          window.SmoothScroll({
            speed: 800,
            speedAsDuration: true
          })
        }
      }

      // Try to initialize with a single timeout
      const timer = setTimeout(() => {
        initializedRef.current = false
        init()
      }, 300)

      return () => {
        clearTimeout(timer)
        cleanup()
        initializedRef.current = false
      }
    }

    const cleanupFn = initializeAnimations()
    return cleanupFn
  }, [location.pathname]) // Re-run on route change
}

