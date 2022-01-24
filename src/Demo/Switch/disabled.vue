<demo>支持disabled</demo>

<template>
   <x-switch v-model:value="value" disabled/>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref(true)
    return {value};
  },
});
</script>

