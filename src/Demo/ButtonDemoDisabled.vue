<demo>禁用状态</demo>

<template>
 <div class="row">
    <Button disabled @click="handleClick">默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="info" disabled>信息按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
  </div>
  <div>
    <Button plain disabled>朴素按钮</Button>
    <Button plain type="primary" disabled>主要按钮</Button>
    <Button plain type="success" disabled>成功按钮</Button>
    <Button plain type="info" disabled>信息按钮</Button>
    <Button plain type="warning" disabled>警告按钮</Button>
    <Button plain type="danger" disabled>危险按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Button },
  setup(){
    return {
      handleClick(){
        console.log('不会打印') 
      } 
    } 
  }
});
</script>
