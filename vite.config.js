import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT:
// Update `base` if you rename the GitHub repo.
// For repo https://github.com/alexandru-bujor/Hipno_Template
// the base must be '/Hipno_Template/' so assets load correctly on GitHub Pages.

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // In development, use root path for easier routing
  // In production: 
  //   - For GitHub Pages: use '/Hipno_Template/'
  //   - For Docker/custom domain: use '/' (set via VITE_BASE_URL env var)
  base: process.env.VITE_BASE_URL || (mode === 'development' ? '/' : '/Hipno_Template/'),
  server: {
    port: 5173,
    open: true
  }
}))

