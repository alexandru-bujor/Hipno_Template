import React, { useEffect, useState } from 'react'
import { getAssetPath } from '../utils/assets'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  if (!loading) return null

  return (
    <div className="preloader" style={{ display: loading ? 'block' : 'none' }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src={getAssetPath('assets/images/loader.svg')} alt="Loading" />
        </div>
      </div>
    </div>
  )
}

export default Preloader

