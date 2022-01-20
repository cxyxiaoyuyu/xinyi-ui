<template>
  <h2>Button 组件示例</h2>
  <Demo :component="ButtonDemoType"></Demo>  
  <Demo :component="ButtonDemoIcon"></Demo>
  <Demo :component="ButtonDemoDisabled"></Demo>
  <Demo :component="ButtonDemoGroup"></Demo>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import ButtonDemoType from "../Demo/ButtonDemoType.vue";
import ButtonDemoIcon from "../Demo/ButtonDemoIcon.vue";
import ButtonDemoDisabled from "../Demo/ButtonDemoDisabled.vue";
import ButtonDemoGroup from "../Demo/ButtonDemoGroup.vue";
export default {
  components: { Button },
  setup() {
    return { ButtonDemoType,ButtonDemoIcon,ButtonDemoDisabled,ButtonDemoGroup };
  },
};
</script>
