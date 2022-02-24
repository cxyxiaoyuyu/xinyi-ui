<template>
  <h2>{{title}}</h2>
  <x-table :thead="thead" :data="data" class="table"></x-table>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '属性' 
  },
  data: Array,
})
const thead = ["属性", "说明", "类型", "可选值", "默认值"];
</script>

<style lang="scss" scoped>
.table {
  margin-bottom: 26px;
}
</style>