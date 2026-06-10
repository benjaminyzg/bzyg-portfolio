import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for username.github.io, or '/repo-name/' for a sub-project
})
