import MessageBox from './MessageBox.vue'
import { createApp, h } from 'vue'

export const openMessageBox = (options) => {

  return new Promise((resolve, reject) => {
    const { title, content } = options
    const div = document.createElement('div')
    const app = createApp({
      render() {
        return h(MessageBox, {
          title: '提示',
          content: '内容',
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