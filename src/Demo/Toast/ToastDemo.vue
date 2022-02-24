<template>
  <h2>Toast 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["autoClose", "多少秒以后关闭 或不自动关闭", "boolean/number", "true/false", "5"],
  ["closeButton", "关闭按钮内容", "string", "--", "关闭"],
  ["enableHtml", "是否支持html", "boolean", "true/false", "false"],
  ["position", "toast显示的位置", "string", "top/middle/bottom", "top"],
]
</script>
