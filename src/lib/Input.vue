<template>
  <div class="gulu-input">
    <input
      class="input"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :class="{ error: error && !modelValue }"
      v-bind="$attrs"
      @input="handleInput($event)"
      @blur="validate($event.target.value)"
    />
    <template v-if="error">
      <x-icon icon="error" class="errorIcon"></x-icon>
    </template>
  </div>
  <div class="errorMessage">{{ error }}</div>
</template>
<script lang="ts">
import Schema from 'async-validator'
export default {
  name: "XInput",
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import {ref} from 'vue'
const props = defineProps({
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
  rule: {
    type: Array 
  }
});


const emit = defineEmits(["update:modelValue"]);

const error = ref('')

const validate = (value) => {
  const rule = props.rule
  // 校验描述对象
  const desc = { 'xxx': rule };
  // 创建Schema实例
  const schema = new Schema(desc);
  schema.validate({ 'xxx': value }, (errors) => {
    console.log(errors,'error')
    if(errors) {
      error.value = errors[0].message 
      
    }else{
      error.value = '' 
    }
  });
}

const handleInput = ($event) => {
  // 校验
  validate($event.target.value)
  emit("update:modelValue", $event.target.value);
};

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
  margin-bottom: 6px;
  display: inline-flex;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 70%;
  > :not(:last-child) {
    margin-right: 0.3em;
  }
  > .input {
    height: $height;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    font-size: 14px;
    padding: 0 8px;
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
    position: absolute;
    right: 12px;
  }
}
.errorMessage {
  color: $red;
  font-size: 14px;
  padding-left: 8px;
}
</style>
