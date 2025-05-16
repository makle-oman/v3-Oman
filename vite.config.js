import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/v3-Oman/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'views': ['./src/views/HomeView.vue', './src/views/ProductsView.vue', './src/views/ProductDetailView.vue']
        }
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
