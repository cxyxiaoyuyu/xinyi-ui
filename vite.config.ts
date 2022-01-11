import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),md()],
  resolve: {
    alias: {
      '@': resolve(__dirname,'src'),
      'comp': '@/components'
    } 
  }
})
