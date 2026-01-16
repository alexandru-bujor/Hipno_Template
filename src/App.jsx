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

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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
            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

