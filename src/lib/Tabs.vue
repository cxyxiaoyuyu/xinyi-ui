<template>
 <div class="gulu-tabs">
  <slot />
 </div>
</template>

<script lang="ts">
export default {
  name: 'XTabs'
}
</script>
<script lang="ts" setup>
import { onMounted } from 'vue'
import eventBus from '../util/bus'
const props = defineProps({
  selected: {
    type: String,
    required: true 
  }
})
// 在父组件mouted 时 子组件已经mounted 了 所以可以接收到事件
onMounted(() => {
  eventBus.emit('update:selected',props.selected)
})
</script> 

<style lang="scss">

</style>