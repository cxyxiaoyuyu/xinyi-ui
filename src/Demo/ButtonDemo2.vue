<demo>不同大小的button</demo>

<template>
 <div>
      <Button size="big">大大大</Button>
      <Button>普普通</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="link" >大大大</Button>
      <Button theme="link">普普通</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Button } 
})
</script>