<demo>不同主题的button</demo>

<template>
  <Button>默认button</Button>
  <Button theme="button">button按钮</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Button } 
})
</script>