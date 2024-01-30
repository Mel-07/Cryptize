import { defineConfig } from 'vite'
import reactIcons from 'react-icons'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [reactIcons],
    },
  },
})
