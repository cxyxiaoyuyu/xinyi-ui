<template>
  <div class="gulu-input">
    <input
      class="input"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :class="{ error: error && !modelValue }"
      v-bind="$attrs"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error && !modelValue">
      <x-icon icon="error" class="errorIcon"></x-icon>
      <span class="errorMessage">{{ error }}{{ modelValue }}</span>
    </template>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'XInput',
    inheritAttrs: false
  }
</script>
<script lang="ts" setup>
defineProps({
  modelValue: {
    type: [String, Number],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
$height: 32px;
$border-radius: 4px;
$font-size: 14px;
$border-color: #ddd;
$border-hover-color: #999;
$focus-shadow-color: rgba(0, 0, 0, 0.3);
$red: #f1453d;
.gulu-input {
  font-size: $font-size;
  margin-bottom: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  > :not(:last-child) {
    margin-right: 0.3em;
  }
  > .input {
    height: $height;
    border-radius: $border-radius;
    font-size: 14px;
    padding: 0 8px;
    border: 1px solid $border-color;
    width: 100%;
    &:hover {
      border: 1px solid $border-hover-color;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $focus-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  > .input.error {
    border: 1px solid $red;
  }
  > .errorIcon {
    fill: $red;
  }
  > .errorMessage {
    color: $red;
  }
}
</style>
