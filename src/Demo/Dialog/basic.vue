<demo>基础用法</demo>
<template>
  <x-button text type="primary" @click="visible = true">显示Dialog</x-button>
  
  <x-dialog v-model="visible">
    <template #title>提示</template>
    <template #content>Vue 实现了一套内容分发的 API</template>
    <template #footer>
      <x-button @click="visible = false">取消</x-button>
      <x-button type="primary" @click="visible = false">确定</x-button>
    </template>
  </x-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
</script>

<style lang="scss" scoped></style>
