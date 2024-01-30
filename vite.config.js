import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/fa','react-icons/fa6', 'react-icons/ci', 'react-icons/fi', 'react-icons/md', 'react-icons/io', 'react-icons/go', 'react-icons/ti', 'react-icons/ai', 'react-icons/gr', 'react-icons/im', 'react-icons/bi', 'react-icons/bs', 'react-icons/cg', 'react-icons/fc', 'react-icons/hi', 'react-icons/io5', 'react-icons/ri', 'react-icons/si', 'react-icons/tw', 'react-icons/vsc'],
    },
  },
});