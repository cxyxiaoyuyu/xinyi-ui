import Switch from './Switch.vue'
import Icon from './Icon.vue'

import { withInstall,makeInstaller } from '../util/install'

// 局部引入
export const XSwitch = withInstall(Switch)
export const XIcon = withInstall(Icon)

const components = [XSwitch,XIcon]

// 全局引入
export default makeInstaller(components)
