import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port:4545 ,
    host :"172.16.40.110"
  }
})
