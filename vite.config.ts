import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/shahladdin/",  // 💡 Use repo name here
  plugins: [react()],
})
