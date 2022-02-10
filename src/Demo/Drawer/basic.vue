<demo>基础用法</demo>

<template>
  <div>
    <label><input type="radio" value="top" v-model="direction" />从上往下</label>
    <label><input type="radio" value="right" v-model="direction" />从右往左</label>
    <label><input type="radio" value="left" v-model="direction" />从左往右</label>
    <label><input type="radio" value="bottom" v-model="direction" />从下往上</label>

    <x-button style="margin-left:10px" @click="drawerVisible = true">open drawer</x-button>

    <x-drawer title="我是标题" v-model="drawerVisible" :direction="direction">
      <span>我来啦!</span>
    </x-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const drawerVisible = ref(false);
const innerDrawer = ref(false);
const direction = ref("top");
const showDrawer = () => {
  drawerVisible.value = true;
};
</script>
