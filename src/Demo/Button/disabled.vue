<demo>禁用状态</demo>

<template>
 <div class="row">
    <x-button disabled @click="handleClick">默认按钮</x-button>
    <x-button type="primary" disabled>主要按钮</x-button>
    <x-button type="success" disabled>成功按钮</x-button>
    <x-button type="info" disabled>信息按钮</x-button>
    <x-button type="warning" disabled>警告按钮</x-button>
    <x-button type="danger" disabled>危险按钮</x-button>
  </div>
  <div>
    <x-button plain disabled>朴素按钮</x-button>
    <x-button plain type="primary" disabled>主要按钮</x-button>
    <x-button plain type="success" disabled>成功按钮</x-button>
    <x-button plain type="info" disabled>信息按钮</x-button>
    <x-button plain type="warning" disabled>警告按钮</x-button>
    <x-button plain type="danger" disabled>危险按钮</x-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(){
    return {
      handleClick(){
        console.log('不会打印') 
      } 
    } 
  }
});
</script>
