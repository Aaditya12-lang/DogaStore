import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0', // Ensures the app is accessible from any device on the same network
  server: {
    host: '0.0.0.0', // Ensures the server is bound to all interfaces
    port: 5173, // You can change the port if needed
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Fixed the alias path
    },
  },
})

