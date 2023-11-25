import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@media': path.resolve(__dirname, 'src/media'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
