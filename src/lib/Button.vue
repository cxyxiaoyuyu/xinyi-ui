<template>
  <button class="gulu-button" :class="classes" v-bind="$attrs" :disabled="disabled">
    <Icon class="gulu-icon" :icon="icon" v-if="icon"></Icon>
    <span v-if="$slots.default"><slot /></span>

    <!-- loading -->
    <Icon icon="loading" v-if="loading"></Icon>
  </button>
</template>
<script lang="ts">
import Icon from "./Icon.vue";
export default {
  inheritAttrs: false,
  components: { Icon },
  props: {
    type: {
      type: String,
      default: "button",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props: any,{slots}) {
    const { type, plain, round, circle, disabled, text } = props;
    const classes = {
      [`gulu-type-${type}`]: type,
      "gulu-text": text,
      "gulu-plain": plain,
      "gulu-round": round,
      "gulu-circle": circle,
      "gulu-disabled": disabled,
    };
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;

$colors: (
  primary: #40a9ff,
  success: #67c23a,
  info: #909399,
  warning: #e6a23c,
  danger: red,
);

@keyframes rotate {
  0% {
    transform: rotate(0)
  } 
  100% {
    transform: rotate(360deg) 
  }
}

.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  border: none;
  color: #fff;
  & + & {
    margin-left: 8px;
  }
  [class*=gulu-icon]+span {
    margin-left: 4px; 
  }
  > span .gulu-icon {
    margin-left: 4px; 
  }
  > span + .gulu-icon {   // loading
    margin-left: 4px; 
    animation: rotate infinite 2s linear;
  }
  &.gulu-type-button {
    color: $color;
    border: 1px solid $border-color;
    background: white;
    &.gulu-text {
      background: none;
      border: none;
    }
  }
  &.gulu-round {
    border-radius: $h;
  }
  &.gulu-circle {
    height: $h;
    width: $h;
    padding: 0;
    border-radius: 50%;
  }
  &.gulu-disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @each $key, $color in $colors {
    &.gulu-type-#{$key} {
      background: $color;
      border: 1px solid $color;
      &.gulu-plain {
        background: none;
        border: 1px solid $color;
        color: $color;
        &:hover {
          background: $color;
          color: white;
        }
      }
      &.gulu-text {
        background: none;
        border: none;
        color: $color;
      }
    }
  }
}
</style>
