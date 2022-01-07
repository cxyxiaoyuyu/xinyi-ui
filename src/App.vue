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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
html,
body {
  height: 100vh;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
  &.active {
     color: #3eaf7c;  // 路由匹配时的字体颜色 
  }
}
</style>
