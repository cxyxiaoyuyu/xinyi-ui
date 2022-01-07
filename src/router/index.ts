import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import DocDemo from '../components/DocDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import InputDemo from '../components/InputDemo.vue'
import TabsDemo from '../components/InputDemo.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/doc', name: 'doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'input', component: InputDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
  ],
  linkActiveClass: 'active'
})


export default router