<demo>输入校验</demo>
<template>
  <x-input v-model="message" placeholder="请输入内容" :rule="[{ required: true, message: '不能为空' }]"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("");
</script>
