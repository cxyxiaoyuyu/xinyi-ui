# 开始使用
请先[安装](#/doc/install)本组件库。

## 全局引入
```
import { createApp } from 'vue'
import App from './App.vue'

import XinyiUI from 'xinyi-ui'

const app = createApp(App)
app.use(XinyiUI)
app.mount('#app')

```

## 单个引入

```
import { createApp } from 'vue'
import App from './App.vue'

import { XIcon, XSwitch, XButton,XTable} from 'xinyi-ui'

const app = createApp(App)
app.use(XIcon)
app.use(XSwitch)
app.use(XButton)
app.use(XTable)
app.mount('#app')
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <x-button type="primary">按钮</x-button>
  </div>
</template>
```

下一节：[button组件](#/doc/button)