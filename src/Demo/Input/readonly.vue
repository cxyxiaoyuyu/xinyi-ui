<demo>只读状态</demo>
<template>
  <x-input v-model="message" readonly placeholder="请输入内容"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("只读状态");
</script>
