import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import DocDemo from 'comp/DocDemo.vue'
import SwitchDemo from 'comp/SwitchDemo.vue'
import ButtonDemo from 'comp/ButtonDemo.vue'
import InputDemo from 'comp/InputDemo.vue'
import TabsDemo from 'comp/InputDemo.vue'

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