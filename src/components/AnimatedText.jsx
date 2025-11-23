import React, { useRef } from 'react'

const AnimatedText = ({ children, className = '', style = '2', ...props }) => {
  const textRef = useRef(null)

  // Animation is handled by useAnimations hook to prevent duplicates
  // Just mark the element for animation
  return (
    <span
      ref={textRef}
      className={`text-anime-style-${style} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default AnimatedText

