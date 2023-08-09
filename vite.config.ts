import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/match-tracker',
  plugins: [react()],
  resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } },
  define: {
    'window.global': {},
  },
})
