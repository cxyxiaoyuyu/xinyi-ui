<template>
  <h2>属性</h2>
  <x-table :thead="thead" :data="data"></x-table>
</template>

<script lang="ts" setup>
defineProps({
  data: Array,
})
const thead = ["属性", "说明", "类型", "可选值", "默认值"];
</script>

<style lang="scss" scoped>

</style>