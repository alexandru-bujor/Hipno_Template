import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { title: 'Pagina principală', link: '/' },
    { title: 'Programare', link: '/programare' },
    { title: 'Consultație', link: '/consultatie' },
    { title: 'Talismanuri și artefacte', link: '/talismanuri' },
    { title: 'Ritualuri', link: '/ritualuri' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contacte', link: '/contacte' }
  ]

  return (
    <header className="main-header">
      <div className="header-sticky">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src="/assets/images/logo.svg" alt="Logo" />
            </Link>

            {/* Main Menu */}
            <div className={`collapse navbar-collapse main-menu ${isMenuOpen ? 'show' : ''}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav mr-auto" id="menu">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-item ${item.submenu ? 'submenu' : ''} ${item.highlighted ? 'highlighted-menu' : ''} ${location.pathname === item.link ? 'active' : ''}`}
                    >
                      <Link 
                        className="nav-link" 
                        to={item.link}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <ul>
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="nav-item">
                              <Link 
                                className="nav-link" 
                                to={subItem.link}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Header Button */}
              <div className="header-btn d-inline-flex">
                <Link to="/programare" className="btn-default">
                  Programare
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="navbar-toggle">
              <button
                className="slicknav_btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="slicknav_menutxt"></span>
                <span className="slicknav_icon">
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                  <span className="slicknav_icon-bar"></span>
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

