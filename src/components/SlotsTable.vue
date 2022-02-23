<template>
  <h2>插槽</h2>
  <x-table :thead="thead" :data="data"></x-table>
</template>

<script lang="ts" setup>
defineProps({
  data: Array,
})
const thead = ["插槽名", "说明"];
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 26px;
}
</style>