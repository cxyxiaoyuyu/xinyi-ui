import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import SwitchDemo from '../demo/Switch/SwitchDemo.vue'
import IconDemo from '../demo/Icon/IconDemo.vue'
import ButtonDemo from '../demo/Button/ButtonDemo.vue'
import TableDemo from '../demo/Table/TableDemo.vue'
import DrawerDemo from '../demo/Drawer/DrawerDemo.vue'

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
        { path: '', redirect: '/doc/install' },
        { path: 'install',component: md(install)},
        { path: 'get-started', component: md(getStarted) },
        { path: 'icon', component: IconDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'drawer', component: DrawerDemo },
        { path: 'table', component: TableDemo },
        { path: 'input', component: TableDemo },
        { path: 'tabs', component: TableDemo },
      ]
    },
  ],
  linkActiveClass: 'active'
})


export default router