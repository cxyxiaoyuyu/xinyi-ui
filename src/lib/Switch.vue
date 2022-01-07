<template>
  <button :class="{checked: value}" @click="$emit('update:value',!value)">
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "",
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  setup() {
  },
});
</script>

<style lang="scss" scoped>
$bh: 22px;
$sh: $bh - 4px;
button {
  height: $bh;
  width: $bh * 2;
  border: none;
  background: #c9c5c5;
  border-radius: $bh/2;
  position: relative;
  outline: none;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $sh;
    width: $sh;
    background: white;
    border-radius: 50%;
    transition: left 0.3s linear;
  }
  &.checked {
    background: #1890ff;
    span {
      left: calc(100% - #{$sh} - 2px);
    }
  }
}
</style>
