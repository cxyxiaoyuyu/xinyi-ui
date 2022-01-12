<template>
  <div>
    <h4>示例1 默认switch</h4>
    <div>
      <component :is="SwitchDemo1"></component>
      <div>展示代码</div>
      <pre>{{SwitchDemo1.__sourceCode}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SwitchDemo1 from './SwitchDemo1.vue'
export default defineComponent({
  name: "",
  setup(){
    return {SwitchDemo1}
  }
});
</script>

<style lang="scss" scoped></style>
