<template>
  <h2>Input 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Clear"></Demo>
  <Demo :component="Password"></Demo>
  <Demo :component="Disabled"></Demo>
  <Demo :component="Readonly"></Demo>

  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
import Readonly from "./readonly.vue";
import Clear from './clear.vue'
import Password from './password.vue'
const data = [
  ["v-model", "是否显示", "boolean", "true/false", "false"],
  ["clear", "是否一键清空", "boolean", "true/false", "false"],
  ["type", "输入框类型", "string", "input/password", "input"],
  ["disabled", "是否禁用", "boolean", "true/false", "false"],
  ["readonly", "是否只读", "boolean", "true/false", "false"],
]
</script>
