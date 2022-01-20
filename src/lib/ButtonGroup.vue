<template>
 <div class="gulu-button-group">
  <slot />
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup(){
    
    return{ }
  }
})
</script>

<style lang="scss" scoped>
.gulu-button-group {
  display: flex;
  align-items: center;
}
</style>