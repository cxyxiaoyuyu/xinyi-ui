var MarkdownIt = require('markdown-it')
// import MarkdownIt from "markdown-it"
const marked = new MarkdownIt()

const mdToJs = str => {
  const content = JSON.stringify(marked.render(str))
  return `export default ${content}`
}

export default ()=>{
  return {
    name: 'vite-plugin-md',
    transform(src,url){
      if(url.endsWith('.md')){
        return {
          code: mdToJs(src),
          map: null // 如果可行将提供 source map
        } 
      }
    }
  }
}