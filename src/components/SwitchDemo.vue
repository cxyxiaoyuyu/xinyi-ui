<template>
 <div>
  <Switch v-model:value="value1"/>
 </div>
</template>

<script lang="ts">
import { defineComponent,reactive, toRefs } from 'vue'
import Switch from '../lib/Switch.vue'
export default defineComponent({
  name: '',
  setup(){
    const state = reactive({
      value1: true,
    }) 
    return toRefs(state)
  },
  components: {Switch}
})
</script>

<style lang="scss" scoped>

</style>