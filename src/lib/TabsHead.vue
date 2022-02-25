<template>
  <div class="gulu-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'XTabsHead'
}
</script>
<script lang="ts" setup>
import TabsItem from '../lib/TabsItem.vue'
import { useSlots } from 'vue'
const slots = useSlots()
const defaults = slots.default()
// 检查每个子组件的类型
defaults.forEach( tag => {
  if(tag.type !== TabsItem){
    throw new Error('TabsHead 子标签必须是 TabsItem ') 
  }
})
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: #409eff;
$border-color: #ddd;
.gulu-tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 2px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }
}
</style>
