<demo>禁用状态</demo>
<template>
  <x-input v-model="message" disabled placeholder="请输入内容"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("禁用状态");
</script>
