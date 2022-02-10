<template>
  <h2>Input 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Disabled"></Demo>
  <Demo :component="Readonly"></Demo>
  <Demo :component="Error"></Demo>

  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
import Readonly from "./readonly.vue";
import Error from "./error.vue";
const data = [
  ["v-model", "是否显示", "boolean", "true/false", "false"],
  ["disabled", "是否禁用", "boolean", "true/false", "false"],
  ["readonly", "是否只读", "boolean", "true/false", "false"],
]
</script>
