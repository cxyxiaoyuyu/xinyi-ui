<template>
 <div class="home">
  <h2>XinYi  &nbsp;UI </h2>
  <h3>一套基于Vue3 的简易UI框架</h3>
  <x-button round type="primary" size="big" @click="$router.push({name: 'install'})">Get Started</x-button>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  setup(){
    
    return{ }
  }
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
}
h3 {
  margin-bottom: 20px;
}
</style>