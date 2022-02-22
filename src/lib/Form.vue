<template>
 <div>
  <slot></slot>
 </div>
</template>
<script lang="ts">
export default {
  name: "XForm"
}
</script>
<script lang="ts" setup>
import { provide,getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
console.log(instance,'form')
provide('form',instance)
defineProps({
  model: {
    type: Object,
    required: true
  },
  rules: {
    type: Object, 
  }
})

const validate = () => {
}
</script>

<style lang="scss">

</style>