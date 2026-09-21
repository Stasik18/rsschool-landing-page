import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        catalog: path.resolve(__dirname, 'catalog.html'),
      },
    },
  },
  base: '/rsschool-landing-page/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
})
