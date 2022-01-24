import Switch from './Switch.vue'
import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

import { withInstall,makeInstaller } from '../util/install'

// 局部引入
export const XSwitch = withInstall(Switch)
export const XIcon = withInstall(Icon)
export const XButton = withInstall(Button,[ButtonGroup])


const components = [XSwitch,XIcon,XButton]

// 全局引入
export default makeInstaller(components)
