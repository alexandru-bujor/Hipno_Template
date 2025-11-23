import React, { useRef } from 'react'

const RevealImage = ({ children, className = '', ...props }) => {
  const revealRef = useRef(null)

  // Animation is handled by useAnimations hook to prevent duplicates
  // Just mark the element for animation
  return (
    <div ref={revealRef} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  )
}

export default RevealImage

