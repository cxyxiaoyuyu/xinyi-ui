import Switch from './Switch.vue'
import Icon from './Icon.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Table from './Table.vue'
import Drawer from './Drawer.vue'
import Input from './Input.vue'
import FormItem from './FormItem.vue'
import Form from './Form.vue'
import Dialog from './Dialog.vue'
import Tabs from './Tabs.vue'
import TabsHead from './TabsHead.vue'
import TabsBody from './TabsBody.vue'
import TabsItem from './TabsItem.vue'
import TabsPane from './TabsPane.vue'

export { openMessageBox } from './openMessageBox'
export { openToast } from './openToast'

import { withInstall,makeInstaller } from '../util/install'

// 局部引入
export const XSwitch = withInstall(Switch)
export const XIcon = withInstall(Icon)
export const XButton = withInstall(Button,[ButtonGroup])
export const XTable = withInstall(Table)
export const XDrawer = withInstall(Drawer)
export const XInput = withInstall(Input)
export const XForm = withInstall(Form,[FormItem])
export const XDialog = withInstall(Dialog)
export const XTabs = withInstall(Tabs,[TabsHead,TabsBody,TabsItem,TabsPane])

const components = [XSwitch,XIcon,XButton,XTable,XDrawer,XInput,XForm,XDialog,XTabs]

// 全局引入
export default makeInstaller(components)
