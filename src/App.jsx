import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPage from './pages/Blog'
import Programare from './pages/Programare'
import Consultatie from './pages/Consultatie'
import Talismanuri from './pages/Talismanuri'
import Ritualuri from './pages/Ritualuri'
import Contacte from './pages/Contacte'
import NotFound from './pages/NotFound'
import Services from "./components/Services";
import WhatWeDo from "./components/WhatWeDo";
import Magazin from "./pages/Magazin";
import Donations from "./pages/Donations";
import ThankYou from "./pages/ThankYou";

function App() {
  // In development, use empty basename. In production (GitHub Pages), use the base path
  const basename = import.meta.env.DEV ? '' : (import.meta.env.BASE_URL || '')
  
  return (
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programare" element={<Programare />} />
            <Route path="/consultatie" element={<Consultatie />} />
            <Route path="/talismanuri" element={<Talismanuri />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ritualuri" element={<Ritualuri />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contacte" element={<Contacte />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/magazin" element={<Magazin />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/payment" element={<Donations />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

