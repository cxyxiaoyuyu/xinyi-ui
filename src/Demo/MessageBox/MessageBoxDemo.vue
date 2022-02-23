<template>
  <h2>MessageBox 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["v-model", "是否显示", "boolean", "true/false", "false"],
]
</script>
