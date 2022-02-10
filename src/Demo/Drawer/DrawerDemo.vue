<template>
  <h2>Drawer 组件示例</h2>
  <Demo :component="Basic"></Demo>

  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["title", "标题", "string", "", ""],
  ["v-model", "是否显示", "boolean", "true/false", "false"],
  ["direction","方向","string","top/left/right/bottom","bottom"]
]
</script>
