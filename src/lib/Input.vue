<template>
  <div class="gulu-input">
    <input
      class="input"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :type="type"
      v-bind="$attrs"
      @input="handleInput($event)"
    />
    <x-icon v-if="clear && modelValue" 
      icon="error" 
      class="icon"
      @click="clearInput"
      ></x-icon>
  </div>
</template>
<script lang="ts">
import Schema from 'async-validator'
export default {
  name: "XInput",
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import {ref,getCurrentInstance,onMounted} from 'vue'
import eventBus from '../util/bus'
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  clear: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
  default: "input" 
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
const input:any = getCurrentInstance()
const parent:any = input.parent
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  eventBus.emit('addInput',input)
})

const handleInput = ($event) => {
  emit("update:modelValue", $event.target.value);

  // 通知父级执行校验
  parent.exposed.validate()
};


const clearInput = () => {
  emit("update:modelValue",'')
}
defineExpose({emit})
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
  // > .input.error {
  //   border: 1px solid $red;
  // }
  > .icon {
    fill: $border-hover-color;
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
