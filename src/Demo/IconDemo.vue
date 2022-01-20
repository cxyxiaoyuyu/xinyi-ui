<demo>常规用法</demo>

<template>
  <Icon icon="edit"></Icon>
  <Icon icon="message"></Icon>
  <Icon icon="delete"></Icon>
  <Icon icon="star"></Icon>
</template>

<script lang="ts">
import Icon from "../lib/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Icon },
});
</script>

