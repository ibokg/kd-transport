import { resolve } from 'path'
import { defineConfig } from 'vite'
import nunjucks from 'vite-plugin-nunjucks'

export default defineConfig({
  plugins: [
    nunjucks(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about_us: resolve(__dirname, 'about_us.html'),
        services: resolve(__dirname, 'services.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
})
