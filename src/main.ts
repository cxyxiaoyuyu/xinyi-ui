import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'github-markdown-css'
import Demo from '@/Demo/Demo.vue'
import './index.scss'
import xinyi from '../src/lib/index'

createApp(App).use(router).component('Demo',Demo).use(xinyi).mount('#app')
