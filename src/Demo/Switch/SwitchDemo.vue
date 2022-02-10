<template>
  <h2>Switch 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Disabled"></Demo>

  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
const data = [
  ["v-model","值","boolean","true/false","false"],
  ["disabled","disabled","boolean","true/false","false"],
]
</script>

<style lang="scss" scoped></style>
