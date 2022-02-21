<demo>密码类型的输入框</demo>
<template>
  <x-input v-model="message" type="password" placeholder="请输入密码"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("");
</script>
