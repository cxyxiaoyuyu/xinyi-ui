<template>
  <h2>Button 组件示例</h2>
  <Demo :component="Type"></Demo>
  <Demo :component="Icon"></Demo>
  <Demo :component="Disabled"></Demo>
  <Demo :component="ButtonGroup"></Demo>
  <Demo :component="Loading"></Demo>
  <Demo :component="Size"></Demo>

  <h2>属性</h2>
  <props-table :data="data"></props-table>
</template>

<script lang="ts" setup>
import Type from "./type.vue";
import Icon from "./icon.vue";
import Disabled from "./disabled.vue";
import ButtonGroup from "./button-group.vue";
import Loading from "./loading.vue";
import Size from "./size.vue";
const data = [
  ["type", "按钮类型", "string", "primary / success / warning / danger / info", "button"],
  ["plain", "是否为朴素按钮", "boolean", "true/false", "false"],
  ["text", "是否为文本按钮", "boolean", "true/false", "false"],
  ["round", "是否为圆角按钮", "boolean", "true/false", "false"],
  ["icon", "图标名", "string", "", ""],
  ["circle", "是否为圆形按钮", "boolean", "true/false", "false"],
  ["disabled", "是否disabled", "boolean", "true/false", "false"],
  ["loading", "是否为加载中状态", "boolean", "true/false", "false"],
  ["size", "按钮大小", "boolean", "big/medium/small", "medium"],
];
</script>
