<template>
  <h2>Switch 组件示例</h2>
  <Demo :component="SwitchDemo1"></Demo>
  <Demo :component="SwitchDemo2"></Demo>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwitchDemo1 from "../Demo/SwitchDemo1.vue";
import SwitchDemo2 from "../Demo/SwitchDemo2.vue";
export default defineComponent({
  name: "",
  setup() {
    return { SwitchDemo1, SwitchDemo2 };
  },
});
</script>

<style lang="scss" scoped></style>
