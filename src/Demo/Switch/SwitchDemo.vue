<template>
  <h2>Switch 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Disabled"></Demo>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
export default defineComponent({
  name: "",
  setup() {
    return { Basic, Disabled };
  },
});
</script>

<style lang="scss" scoped></style>
