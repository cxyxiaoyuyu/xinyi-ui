<demo>隔行变色</demo>

<template>
  <div>
    <x-table stripe :thead="theadData" :data="tableData"></x-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const theadData = ref([
      { prop: "日期", width: 200 },
      { prop: "姓名", width: 200 },
      { prop: "地址" },
    ]);
    const tableData = ref([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [11, 12, 13],
    ]);
    return { tableData, theadData };
  },
});
</script>

<style lang="scss" scoped></style>
