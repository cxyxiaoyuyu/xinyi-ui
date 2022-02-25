<demo>基础使用</demo>

<template>
  <x-tabs selected="css">
    <x-tabs-head>
      <x-tabs-item name="html">HTML</x-tabs-item>
      <x-tabs-item name="xml" disabled>XML</x-tabs-item>
      <x-tabs-item name="css">CSS</x-tabs-item>
      <x-tabs-item name="js">JS</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="html">这是HTML的内容</x-tabs-pane>
      <x-tabs-pane name="xml">这是XML的内容</x-tabs-pane>
      <x-tabs-pane name="css">这是CSS的内容</x-tabs-pane>
      <x-tabs-pane name="js">这是JavaScritp的内容</x-tabs-pane>
    </x-tabs-body>
  </x-tabs>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped></style>
