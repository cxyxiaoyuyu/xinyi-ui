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
  ["thead", "表头数据", "array/object", "", ""],
  ["data", "表格数据", "array", "", ""],
  ["stripe", "是否隔行变色", "boolean", "true/false", "false"],
  ["border", "是否有边框", "boolean", "true/false", "false"],
];
</script>

<style lang="scss" scoped></style>
