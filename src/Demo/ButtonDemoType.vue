<demo>主题按钮</demo>

<template>
  <div class="row">
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>
  <div class="row">
    <Button plain>朴素按钮</Button>
    <Button plain type="primary">主要按钮</Button>
    <Button plain type="success">成功按钮</Button>
    <Button plain type="info">信息按钮</Button>
    <Button plain type="warning">警告按钮</Button>
    <Button plain type="danger">危险按钮</Button>
  </div>
  <div class="row">
    <Button round>圆角按钮</Button>
    <Button round type="primary">主要按钮</Button>
    <Button round type="success">成功按钮</Button>
    <Button round type="info">信息按钮</Button>
    <Button round type="warning">警告按钮</Button>
    <Button round type="danger">危险按钮</Button>
  </div>
  <div>
    <Button text>文字按钮</Button>
    <Button type="primary" text>主要按钮</Button>
    <Button type="success" text>成功按钮</Button>
    <Button type="info" text>信息按钮</Button>
    <Button type="warning" text>警告按钮</Button>
    <Button type="danger" text>危险按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Button },
});
</script>
