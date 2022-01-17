import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import DocDemo from '../components/DocDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import InputDemo from '../components/InputDemo.vue'
import TabsDemo from '../components/InputDemo.vue'

import install from '../markdown/install.md'
import getStarted from '../markdown/get-started.md'

import { h } from 'vue';
import Markdown from '../components/Markdown.vue';
const md = (content:string) => h(Markdown, { content })
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    {
      path: '/doc', name: 'doc', component: Doc, children: [
        { path: '', component: DocDemo },
        { path: 'install', component: md(install)},
        { path: 'get-started', component: md(getStarted) },
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