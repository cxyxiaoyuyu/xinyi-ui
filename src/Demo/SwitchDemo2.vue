<demo>支持disabled</demo>

<template>
   <Switch v-model:value="value" disabled/>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "",
  setup() {
    const value = ref(true)
    return {value};
  },
  components: { Switch },
});
</script>

