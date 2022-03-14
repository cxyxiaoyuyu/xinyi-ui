import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

const vueDemoPlugin = () => {
  return {

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
        // 这个函数后面是谁去执行的呢？？？
        return `export default Comp => { 
        Comp.__sourceCode = ${JSON.stringify(main)} 
        Comp.__sourceCodeTitle = ${JSON.stringify(code)}   
      }`
      }
    }
  }
}
export default vueDemoPlugin