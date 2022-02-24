<template>
  <div class="gulu-form-item">
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <slot />
    <!-- 校验信息 -->
    <span class="error" v-if="error">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "XFormItem",
};
</script>
<script lang="ts" setup>
import { ref, inject,onMounted,getCurrentInstance, useSlots } from "vue";
import eventBus from '../util/bus'
import Schema from 'async-validator'
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  prop: {
    type: String,
  }
});
const error = ref(""); // error 为空说明校验通过
const form:any = inject("form");

const slots = useSlots()
const initValue = form.props.model[props.prop]

let child:any
eventBus.on('addInput',(input:any)=>{
  if(input.parent === formItem){  // 判断该子组件的父组件是否是当前组件 否则child会被覆盖
    child = input
  }
})

const formItem = getCurrentInstance()
onMounted(() => {
  if(props.prop){  // 如果有prop 则将当前实例添加给form父组件
    eventBus.emit('addFormItem',formItem)
  }
})

const validate = () => {
  const rules = form.props.rules[props.prop] || [];
  const value = form.props.model[props.prop];
  // 校验描述对象
  const desc = { [props.prop]: rules };
  // 创建Schema实例
  const schema = new Schema(desc);
  return schema.validate({ [props.prop]: value }, (errors) => {
    if (errors) {
      error.value = errors[0].message;
    } else {
      // 校验通过
      error.value = "";
    }
  });
};

// 对该表单项进行重置，将其值重置为初始值并移除校验结果
const resetFields = () => {
  console.log(child,'input',initValue)
  child.exposed.emit('update:modelValue',initValue)
  error.value = ''
}
defineExpose({validate, resetFields})
</script>

<style lang="scss">
.gulu-form-item {
  display: flex;
  height: 50px;
  align-items: center;
  width: 70%;
  label {
    width: 4em;
    text-align: left;
  }
  .error {
    color: red;
    padding-left: 20px;
    font-size: 14px;
  }
}
</style>
