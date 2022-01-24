<demo>常规用法</demo>

<template>
   <x-switch v-model:value="value" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref(true)
    return {value};
  },
});
</script>

