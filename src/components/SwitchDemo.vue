<template>
  <div>
    <h4>示例1 默认switch</h4>
    <div>
      <SwitchDemo1></SwitchDemo1>
      <div>展示代码</div>
      <pre>{{SwitchDemo1._sourceCode}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SwitchDemo1 from './SwitchDemo1.vue'
export default defineComponent({
  name: "",
  components: { SwitchDemo1 },
  setup(){
    return {SwitchDemo1}
  }
});
</script>

<style lang="scss" scoped></style>
