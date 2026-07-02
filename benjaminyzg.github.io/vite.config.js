import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or @vitejs/plugin-react depending on your exact package

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-portfolio/',
  plugins: [react()]
})
