<template>
  <h2>MessageBox 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["title", "标题", "string", "", "提示"],
  ["content", "内容", "string", "", ""],
]
</script>
