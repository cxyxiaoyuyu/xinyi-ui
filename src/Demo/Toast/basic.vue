<demo>基础使用</demo>

<template>
  <x-button type="primary" text @click="open('top')">open Toast Top</x-button>
  <x-button type="primary" text @click="open('middle')">open Toast Middle</x-button>
  <x-button type="primary" text @click="open('bottom')">open Toast Bottom</x-button>
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
import { openToast } from '../../lib/openToast'

const open = (position) => {
  openToast({
    autoClose: true,
    position,
    closeButton: '好的',
    content: '哈哈哈哈' 
  })
}
</script>

<style lang="scss" scoped></style>
