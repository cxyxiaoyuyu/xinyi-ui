import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

import path from 'path'

const vueDemoPlugin = {
  name: 'vite-plugin-vue-demo',
  transform(code, path) {
    // 以Button/type.vue 举例  该组件会发三个请求
    // .../xinyi-ui/src/demo/Button/type.vue
    // .../xinyi-ui/src/demo/Button/type.vue?vue&type=demo&index=0&lang.demo
    // .../xinyi-ui/src/demo/Button/type.vue?vue&type=style&index=0&lang.css

    // 拦截type=demo的响应 根据path 读取文件内容 通过parse 可以获取到demo 标签
    // 再将demo 标签 截取掉 将源码给组件__sourceCode  
    // code 是直接获取到的代码内容 也就是demo 标签中的内容 => 主题按钮
    // 将code给__sourceCodeTitle
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
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/lib/index.ts'),
  //     name: 'xinyi-ui',
  //     fileName: (format) => `xinyi-ui.${format}.js`
  //   },
  //   rollupOptions: {
  //     // 确保外部化处理那些你不想打包进库的依赖
  //     external: ['vue'],
  //     output: {
  //       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   }
  // }
})
