<template>
 <div class="gulu-button-group">
  <slot />
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'XButtonGroup',
  setup(){
    
    return{ }
  }
})
</script>

<style lang="scss">
.gulu-button-group {
  display: inline-flex;
  align-items: center;
  >.gulu-button {
    border-right: 1px solid #fff; 
    margin-left: 0;
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  & + & {
    margin-left: 8px; 
  }
}
</style>