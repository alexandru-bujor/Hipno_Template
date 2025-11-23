import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPage from './pages/Blog'
import Programare from './pages/Programare'
import Consultatie from './pages/Consultatie'
import Talismanuri from './pages/Talismanuri'
import Ritualuri from './pages/Ritualuri'
import Contacte from './pages/Contacte'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programare" element={<Programare />} />
          <Route path="/consultatie" element={<Consultatie />} />
          <Route path="/talismanuri" element={<Talismanuri />} />
          <Route path="/ritualuri" element={<Ritualuri />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacte" element={<Contacte />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

