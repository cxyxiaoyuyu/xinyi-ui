import MessageBox from './MessageBox.vue'
import { createApp, h } from 'vue'

interface Options {
  title: string,
  content: string
}

export const openMessageBox = (options:Options) => {

  return new Promise((resolve, reject) => {
    const { title, content } = options
    const div = document.createElement('div')
    const app = createApp({
      render() {
        return h(MessageBox, {
          title,
          content,
          'onOk': () => {
            app.unmount()
            resolve('ok')
          },
          'onCancel': () => {
            reject()
            app.unmount()
          },
          'onClose': () => {
            app.unmount() 
          }
        }
        )
      }
    })
    app.mount(div)
    document.body.appendChild(div)
  })
}