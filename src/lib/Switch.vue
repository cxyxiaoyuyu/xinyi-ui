<template>
  <button class="gulu-switch" :class="{'gulu-checked': modelValue,'gulu-disabled': disabled}" :disabled="disabled" @click="$emit('update:modelValue',!modelValue)">
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent} from "vue";
export default defineComponent({
  name: "XSwitch",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false 
    }
  },
  setup() {
  },
});
</script>

<style lang="scss">
$bh: 22px;
$sh: $bh - 4px;
.gulu-switch {
  height: $bh;
  width: $bh * 2;
  border: none;
  background: #c9c5c5;
  border-radius: calc($bh / 2);
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
  &.gulu-checked {
    background: #1890ff;
    span {
      left: calc(100% - #{$sh} - 2px);
    }
  }
  &.gulu-disabled {
    opacity: 0.7; 
  }
}
</style>
