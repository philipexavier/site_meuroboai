import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: [
      'meuroboai.com.br',
      'www.meuroboai.com.br',
      'meu-robo-ai-site.5cnl1a.easypanel.host'
    ]
  },
  preview: {
    host: true,
    allowedHosts: [
      'meuroboai.com.br',
      'www.meuroboai.com.br',
      'meu-robo-ai-site.5cnl1a.easypanel.host'
    ],
    port: 3000,
    strictPort: true
  }
})
