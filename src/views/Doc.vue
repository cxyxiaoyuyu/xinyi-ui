<template>
  <aside :class="{hide: !asideVisible}">
    <h4>组件列表</h4>
    <div>Button 组件</div>
    <div>Button 组件</div>
    <div>Button 组件</div>
    <div>Button 组件</div>
    <div>Button 组件</div>
  </aside>
  <main>
    组件显示区域
  </main>
</template>

<script lang="ts">
import { defineComponent, inject ,Ref} from 'vue'
export default defineComponent({
  name: '',
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible') as Ref<boolean>

    return{ asideVisible }
  }
})
</script>

<style lang="scss" scoped>
aside {
  border-right: 1px solid #eee;
  width: 260px;
  height: calc(100vh - 60px);
  padding: 20px;
}

@media screen and (max-width: 500px) {
  aside {
    transition: .3s;
    &.hide {
      transform: translateX(-100%);
    }
  }
}

</style>