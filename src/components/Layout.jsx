import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'
import { useAnimations } from '../hooks/useAnimations'
import { ScrollToTop } from '../utils/scrollToTop'

const Layout = ({ children }) => {
  // Initialize animations on mount and route changes
  useAnimations()

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Preloader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

