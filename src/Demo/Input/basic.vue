<demo>基础示例</demo>
<template>
  <x-input v-model="message" placeholder="请输入内容"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("hello vue3");
</script>
