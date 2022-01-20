<template>
  <button class="gulu-button" :class="classes" v-bind="$attrs" :disabled="disabled">
    <Icon class="gulu-icon" :icon="icon" v-if="icon"></Icon>
    <span v-if="$slots.default"><slot /></span>
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

// .gulu-button {

//   &:hover,
//   &:focus {
//     color: $blue;
//     border-color: $blue;
//   }
//   &:focus {
//     outline: none;
//   }
//   &::-moz-focus-inner {  // 兼容firefox
//     border: 0;
//   }
//   &.gulu-type-link {
//     border-color: transparent;
//     box-shadow: none;
//     color: $blue;
//     &:hover,
//     &:focus {
//       color: lighten($blue, 10%);
//     }
//   }
//   &.gulu-type-text {
//     border-color: transparent;
//     box-shadow: none;
//     color: inherit;
//     &:hover,
//     &:focus {
//       background: darken(white, 5%);
//     }
//   }
//   &.gulu-size-big {
//     font-size: 24px;
//     height: 48px;
//     padding: 0 16px;
//   }
//   &.gulu-size-small {
//     font-size: 12px;
//     height: 20px;
//     padding: 0 4px;
//   }
//   &.gulu-type-button {
//     &.gulu-level-main {
//       background: $blue;
//       color: white;
//       border-color: $blue;
//       &:hover,
//       &:focus {
//         background: darken($blue, 10%);
//         border-color: darken($blue, 10%);
//       }
//     }
//     &.gulu-level-danger {
//       background: $red;
//       border-color: $red;
//       color: white;
//       &:hover,
//       &:focus {
//         background: darken($red, 10%);
//         border-color: darken($red, 10%);
//       }
//     }
//   }
//   &.gulu-type-link {
//     &.gulu-level-danger {
//       color: $red;
//       &:hover,
//       &:focus {
//         color: darken($red, 10%);
//       }
//     }
//   }
//   &.gulu-type-text {
//     &.gulu-level-main {
//       color: $blue;
//       &:hover,
//       &:focus {
//         color: darken($blue, 10%);
//       }
//     }
//     &.gulu-level-danger {
//       color: $red;
//       &:hover,
//       &:focus {
//         color: darken($red, 10%);
//       }
//     }
//   }
//   &.gulu-type-button {
//     &[disabled] {
//       cursor: not-allowed;
//       color: $grey;
//       &:hover {
//         border-color: $grey;
//       }
//     }
//   }
//   &.gulu-type-link, &.gulu-type-text {
//     &[disabled] {
//       cursor: not-allowed;
//       color: $grey;
//     }
//   }
//   > .gulu-loadingIndicator{
//     width: 14px;
//     height: 14px;
//     display: inline-block;
//     margin-right: 4px;
//     border-radius: 8px;
//     border-color: $blue $blue $blue transparent;
//     border-style: solid;
//     border-width: 2px;
//     animation: gulu-spin 1s infinite linear;
//   }
// }
// @keyframes gulu-spin {
//   0%{transform: rotate(0deg)}
//   100%{transform: rotate(360deg)}
// }
</style>
