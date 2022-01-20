<demo>图标按钮</demo>

<template>
  <div class="row">
    <Button icon="search">默认按钮</Button>
    <Button icon="edit" type="primary">主要按钮</Button>
    <Button icon="menu" type="success">成功按钮</Button>
    <Button icon="message" type="info">信息按钮</Button>
    <Button icon="star" type="warning">警告按钮</Button>
    <Button icon="delete" type="danger">危险按钮</Button>
  </div>
  <div class="row">
    <Button round>默认按钮<icon icon="search"></icon></Button>
    <Button round type="primary">主要按钮<icon icon="edit"></icon></Button>
    <Button round type="success">成功按钮<icon icon="menu"></icon></Button>
    <Button round type="info">信息按钮<icon icon="message"></icon></Button>
    <Button round type="warning">警告按钮<icon icon="star"></icon></Button>
    <Button round type="danger">危险按钮<icon icon="delete"></icon></Button>
  </div>
  <div>
    <Button icon="search" circle></Button>
    <Button icon="edit" circle type="primary"></Button>
    <Button icon="menu" circle type="success"></Button>
    <Button icon="message" circle type="info"></Button>
    <Button icon="star" circle type="warning"></Button>
    <Button icon="delete" circle type="danger"></Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Icon from "../lib/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Button, Icon },
});
</script>
<style>
.row {
  margin-bottom: 20px;
}
</style>
