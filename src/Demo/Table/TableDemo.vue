<template>
  <div>
    <h2>Table 组件示例</h2>
    <Demo :component="Basic"></Demo>
    <Demo :component="Stripe"></Demo>
    <Demo :component="Border"></Demo>

    <h2>属性</h2>
    <x-table :thead="thead" :data="data"></x-table>
  </div>
</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
import Stripe from "./stripe.vue";
import Border from "./border.vue";
const thead = ["属性", "说明", "类型", "可选值", "默认值"];
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

<style lang="scss" scoped></style>
