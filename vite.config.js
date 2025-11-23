import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT:
// Update `base` if you rename the GitHub repo.
// For repo https://github.com/alexandru-bujor/Hipno_Template
// the base must be '/Hipno_Template/' so assets load correctly on GitHub Pages.

export default defineConfig({
  plugins: [react()],
  base: '/Hipno_Template/',
  server: {
    port: 3000,
    open: true
  }
})

