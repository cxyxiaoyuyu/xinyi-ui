<demo>不同尺寸</demo>

<template>
  <div class="row">
    <Button size="big">大按钮</Button>
    <Button>默认大小</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div class="row">
    <Button round size="big">大按钮</Button>
    <Button round>默认大小</Button>
    <Button round size="small">小按钮</Button>
  </div>
  <div>
    <Button circle size="big" icon="star"></Button>
    <Button circle icon="message"></Button>
    <Button circle size="small" icon="delete"></Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Button },
});
</script>