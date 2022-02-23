<template>
  <h2>Dialog 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <props-table :data="data"></props-table>
  <slots-table :data="slotsData"></slots-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["v-model", "是否显示", "boolean", "true/false", "false"],
]
const slotsData = [
  ["title", "dialog 标题"],
  ["content", "dialog 内容"],
  ["footer", "dialog 按钮操作区的内容"],
]
</script>
