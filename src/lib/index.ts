import Switch from './Switch.vue'
import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Table from './Table.vue'

import { withInstall,makeInstaller } from '../util/install'

// 局部引入
export const XSwitch = withInstall(Switch)
export const XIcon = withInstall(Icon)
export const XButton = withInstall(Button,[ButtonGroup])
export const XTable = withInstall(Table)

const components = [XSwitch,XIcon,XButton,XTable]

// 全局引入
export default makeInstaller(components)
