<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang="ts">

export default {
  name: "XForm",
};
</script>
<script lang="ts" setup>
import { provide, getCurrentInstance, ref } from "vue";
// import eventBus1 from "../util/bus";
// import eventBus2 from '../util/bus'
// console.log(eventBus1 === eventBus2)  // true

import mitt from 'mitt'
const eventBus = mitt()
console.log(eventBus,'eventBus')
const form = getCurrentInstance();
provide("form", form);
provide('eventBus',eventBus)
const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
  },
});

// 存储所有有prop 的 子formItem
const children: Array<any> = [];

eventBus.on("addFormItem", (child) => {
  console.log(child)
  children.push(child);
});

const validate = (callback) => {
  // 让所有子formItem执行自身validate方法
  const tasks = children.map((item) => item.exposed.validate());
  Promise.all(tasks)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
};

const resetFields = () => {
  // 所有子 formItem 执行自身resetFields
  children.map((item) => item.exposed.resetField());
};
defineExpose({ validate, resetFields });
</script>

<style lang="scss"></style>
