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
import eventBus from "../util/bus";

const form = getCurrentInstance();
console.log("form", form);
provide("form", form);
defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
  },
});

// 存储所有有prop 的 子formItem
const children:Array<any> = [];

eventBus.on("addFormItem", (child) => {
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
defineExpose({ validate });
</script>

<style lang="scss"></style>
