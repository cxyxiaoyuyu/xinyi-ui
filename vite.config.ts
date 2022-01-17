import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

import path from 'path'

const vueDemoPlugin = {
  name: 'vue-i18n',
  transform(code, path) {
    if (/vue&type=demo/.test(path)) {
      const file = fs.readFileSync(path.split('?')[0]).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default Comp => { 
        Comp.__sourceCode = ${JSON.stringify(main)} 
        Comp.__sourceCodeTitle = ${JSON.stringify(code)}   
      }`
    }
  }
}

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueDemoPlugin, md()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'comp': '@/components'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'xinyi-ui',
      fileName: (format) => `xinyi-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
