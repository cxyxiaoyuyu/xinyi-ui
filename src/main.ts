import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'github-markdown-css'
import Demo from '@/Demo/Demo.vue'
import './index.scss'
import xinyi from '../src/lib/index'
import PropsTable from '../src/components/PropsTable.vue'

createApp(App).use(router).component('Demo',Demo).use(xinyi).component('PropsTable',PropsTable).mount('#app')
