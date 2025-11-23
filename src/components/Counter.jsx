import React, { useEffect, useRef } from 'react'

const Counter = ({ value, suffix = '', prefix = '', className = '', ...props }) => {
  const counterRef = useRef(null)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return

    const animate = () => {
      if (typeof window === 'undefined' || !window.jQuery) {
        setTimeout(animate, 100)
        return
      }

      const $ = window.jQuery
      const $element = $(element)

      if ($element.data('counter-initialized')) return

      if ($.fn.waypoint && $.fn.counterUp) {
        $element.waypoint(
          function() {
            $element.counterUp({
              delay: 10,
              time: 2000
            })
            $element.data('counter-initialized', true)
          },
          {
            offset: '75%'
          }
        )
      }
    }

    animate()
  }, [value])

  return (
    <span ref={counterRef} className={`counter ${className}`} {...props}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}

export default Counter

