<template>
  <h2>Button 组件示例</h2>
  <Demo :component="Type"></Demo>  
  <Demo :component="Icon"></Demo>
  <Demo :component="Disabled"></Demo>
  <Demo :component="ButtonGroup"></Demo>
  <Demo :component="Loading"></Demo>
  <Demo :component="Size"></Demo>

  <h2>属性</h2>
  <x-table :thead="thead" :data="data"></x-table>
</template>
<script lang="ts">
import Type from "./type.vue";
import Icon from "./icon.vue";
import Disabled from "./disabled.vue";
import ButtonGroup from "./button-group.vue";
import Loading from "./loading.vue";
import Size from "./size.vue";
export default {
  setup() {
    const thead = ['属性','说明','类型','默认值']
    const data = [
      ['type','按钮类型','string','button'],
      ['plain','是否为朴素按钮','boolean','false'],
      ['text','是否为文本按钮','boolean','false']
    ]
    return { Type,ButtonGroup,Icon,Disabled,Size,Loading, thead, data};
  },
};
</script>
