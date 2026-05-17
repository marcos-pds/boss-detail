import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/boss-detail/', // 👈 ADICIONE ESTA LINHA (com as barras no início e fim)
})
