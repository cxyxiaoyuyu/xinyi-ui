<demo>基础用法</demo>
<template>
  <x-button text type="primary" @click="show">显示MessageBox</x-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { openMessageBox } from '../../lib/openMessageBox'
const show = () => {
  openMessageBox({title: '提示',content: '内容'})
    .then(()=>{
      console.log('点击了确定') 
    })
    .catch(() => {
      console.log('点击了取消') 
    })
}
</script>

<style lang="scss" scoped></style>
