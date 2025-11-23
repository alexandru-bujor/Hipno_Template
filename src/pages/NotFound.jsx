import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{ 
      padding: '100px 0', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '120px', margin: '0', color: '#ddd' }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn-default" style={{ marginTop: '20px', display: 'inline-block' }}>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound

