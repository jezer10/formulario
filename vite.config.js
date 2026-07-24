import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

const resolve = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        contacts: resolve('contacts.html'),
        help: resolve('help.html'),
        home: resolve('home.html'),
      },
    },
  },
})
