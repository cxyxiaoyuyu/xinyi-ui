<template>
  <div class="doc">
    <aside :class="{ hide: !asideVisible }">
      <h4>组件列表</h4>
      <div v-for="component in compentList" :key="component" class="route">
        <router-link :to="`/doc/${component.toLowerCase()}`"
          >{{ component }} 组件</router-link
        >
      </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from "vue";
import compentList from "../util/compentList";
export default defineComponent({
  name: "",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible") as Ref<boolean>;

    return { asideVisible, compentList };
  },
});
</script>

<style lang="scss" scoped>
$asideWidth: 200px;
.doc {
  display: flex;
  aside {
    border-right: 1px solid #eee;
    background: #fff;
    width: $asideWidth;
    height: calc(100vh - 60px);
    padding: 20px;
    position: fixed;
    top: 60px;
    h4 {
      margin-bottom: 14px;
    }
    .route {
      margin-bottom: 8px;
    }
  }
  main {
    margin-left: $asideWidth;
  }

  @media screen and (max-width: 500px) {
    aside {
      transition: 0.3s;
      &.hide {
        transform: translateX(-100%);
      }
    }
    main {
      margin-left: 0;
    }
  }
}
</style>
