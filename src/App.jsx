import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
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
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/programare"
            element={
              <Layout>
                <Programare />
              </Layout>
            }
          />
          <Route
            path="/consultatie"
            element={
              <Layout>
                <Consultatie />
              </Layout>
            }
          />
          <Route
            path="/talismanuri"
            element={
              <Layout>
                <Talismanuri />
              </Layout>
            }
          />
          <Route
            path="/ritualuri"
            element={
              <Layout>
                <Ritualuri />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/contacte"
            element={
              <Layout>
                <Contacte />
              </Layout>
            }
          />
          {/* 404 Page */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

