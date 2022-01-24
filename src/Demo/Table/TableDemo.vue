<template>
 <div>
  <h2>Table 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Stripe"></Demo>
  <Demo :component="Border"></Demo>
 </div>
</template>

<script lang="ts">
import Basic from './basic.vue'
import Stripe from './stripe.vue'
import Border from './border.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  setup(){
    return{ Basic, Stripe, Border }
  }
})
</script>

<style lang="scss" scoped>

</style>