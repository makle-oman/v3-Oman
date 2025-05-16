import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/v3-Oman/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
