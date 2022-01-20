<demo>隔行变色</demo>

<template>
  <div>
    <Table stripe :thead="theadData" :data="tableData"></Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Table from "../../lib/Table.vue";
export default defineComponent({
  components: { Table },
  setup() {
    const theadData = ref([
      { prop: "日期", width: 100 },
      { prop: "姓名", width: 100 },
      { prop: "地址", width: 200 },
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
