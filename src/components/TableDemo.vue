<template>
 <div>
  <h2>Table 组件示例</h2>
  <Demo :component="TableDemoBasic"></Demo>
  <Demo :component="TableDemoStripe"></Demo>
  <Demo :component="TableDemoBorder"></Demo>
  <Demo :component="TableDemoFixHead"></Demo>
 </div>
</template>

<script lang="ts">
import TableDemoBasic from '../Demo/Table/basic.vue'
import TableDemoStripe from '../Demo/Table/stripe.vue'
import TableDemoBorder from '../Demo/Table/border.vue'
import TableDemoFixHead from '../Demo/Table/fixhead.vue'
import Demo from '../Demo/Demo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  component: { Demo },
  setup(){
    return{ TableDemoBasic, TableDemoStripe, TableDemoBorder, TableDemoFixHead}
  }
})
</script>

<style lang="scss" scoped>

</style>