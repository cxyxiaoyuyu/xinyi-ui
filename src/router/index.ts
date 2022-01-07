import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/',name:'home',component: Home },
    {path: '/doc',name:'doc',component: Doc },
  ],
  linkExactActiveClass: 'active'
})

export default router