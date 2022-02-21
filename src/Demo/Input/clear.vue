<demo>一键清空</demo>

<template>
  <x-input v-model="message" clear placeholder="请输入内容"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("一键清空");
</script>