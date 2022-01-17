<template>
  <div>
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import TopNav from "./components/TopNav.vue";
import router from './router/index'
export default defineComponent({
  name: "",
  setup() {
    const deviceWidth = document.documentElement.clientWidth;
    const asideVisible = ref(deviceWidth > 500 ? true : false); // 屏幕宽度小于500px 隐藏侧边栏
    provide("asideVisible", asideVisible);

    // 每次路由切换关闭aside
    router.afterEach(() => {
      if(deviceWidth < 500) {
        asideVisible.value = false
      }
    });
    return {};
  },
  components: { TopNav },
});
</script>

<style lang="scss">

</style>
