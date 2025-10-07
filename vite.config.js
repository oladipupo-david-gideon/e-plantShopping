// vite.config.js (The correct change)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Change base: "/shoppingreact" to base: "./"
  base: "./", 
  plugins: [react()],
})
