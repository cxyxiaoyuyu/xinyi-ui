<template>
  <h2>Tabs 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Disabled"></Demo>
  <props-table :data="data" title="tabs 属性"></props-table>
  <props-table :data="dataItem" title="tabsItem 属性"></props-table>
  <props-table :data="dataPane" title="tabsPane 属性"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
const data = [
  ["selected", "选中的标签名称 必填", "string", "--", "--"],
]
const dataItem = [
  ["name", "标签名称 必填", "string", "--", "--"],
  ["disabled", "是否disabled", "boolean", "true/false", "false"],
]
const dataPane = [
  ["name", "标签名称 必填", "string", "--", "--"],
]
</script>
