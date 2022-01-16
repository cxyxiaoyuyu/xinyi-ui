<template>
  <h2>Button 组件示例</h2>
  <Demo :component="ButtonDemo1"></Demo>
  <Demo :component="ButtonDemo2"></Demo>  


  <h4>示例3 按钮等级</h4>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>

  <h4>示例4 禁用按钮</h4>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
  <h4>示例5 加载中状态</h4>
  <div>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import ButtonDemo1 from "../Demo/ButtonDemo1.vue";
import ButtonDemo2 from "../Demo/ButtonDemo2.vue";
export default {
  components: { Button },
  setup() {
    return { ButtonDemo1,ButtonDemo2 };
  },
};
</script>
