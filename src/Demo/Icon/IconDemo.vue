<template>
  <h2>Icon 组件示例</h2>
  <Demo :component="IconDemo"></Demo>

</template>
<script lang="ts">
import IconDemo from "./basic.vue";
export default {
  setup() {
    return { IconDemo };
  },
};
</script>
