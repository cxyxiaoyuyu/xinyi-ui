import Toast from './Toast.vue'
import { createApp, h } from 'vue'

export const openToast = (options) => {
  const { content,...props } = options
    const div = document.createElement('div')
    const app = createApp({
      render() {
        return h(Toast, {
          ...props,
          'onClose': () => {
            app.unmount() 
          }
        },{
          default: () => content 
        })
      }
    })
    app.mount(div)
    document.body.appendChild(div)
}