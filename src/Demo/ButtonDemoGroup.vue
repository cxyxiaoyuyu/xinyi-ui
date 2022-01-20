<demo>按钮组</demo>

<template>
  <ButtonGroup>
    <Button type="primary" icon="prev">上一页</Button>
    <Button type="primary">下一页<icon icon="next"></icon></Button>
  </ButtonGroup>
</template>

<script lang="ts">
import ButtonGroup from "../lib/ButtonGroup.vue";
import Button from "../lib/Button.vue";
import Icon from "../lib/Icon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ButtonGroup,Button,Icon},
});
</script>

<style lang="scss" scoped>

</style>