import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/images/favicon.svg', 'assets/images/profile.png', 'assets/images/Dhanush Kumar B - CSE - NCT.pdf'],
      manifest: {
        name: 'Dhanush Kumar | Portfolio',
        short_name: 'Dhanush',
        description: 'Personal portfolio of Dhanush Kumar',
        theme_color: '#06b6d4',
        icons: [
          {
            src: 'assets/images/favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'assets/images/favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
