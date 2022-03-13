<template>
  <h2>Form 组件示例</h2>
  <Demo :component="Basic"></Demo>
  <Demo :component="Basic"></Demo>
  <props-table :data="data" title="Form 属性"></props-table>

  <h2>Form 方法</h2>
  <x-table :thead="methodHead" :data="methodData" class="table"></x-table>

  <props-table :data="formItemData" title="FormItem 属性"></props-table>

  <h2>FormItem 方法</h2>
  <x-table :thead="methodHeadItem" :data="methodDataItem" class="table"></x-table>

</template>

<script lang="ts" setup>
import Basic from "./basic.vue";
const data = [
  ["model", "表单数据对象", "object", "", ""],
  ["rules", "表单验证规则", "object", "", ""],
]

const methodHead = ["方法名","说明","回调函数"] 
const methodData = [
  ["validate","对整个表单作验证。 参数为一个回调函数。回调函数有一个参数 表示表单是否验证通过",'Callback(boolean)'],
  ["resetFields","对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",""]
]

const methodHeadItem = ["方法名","说明","参数"] 
const methodDataItem = [
  ["validate","对该表单项进行验证",''],
  ["resetField","对该表单项进行重置，将其值重置为初始值并移除校验结果",""]
]

const formItemData = [
  ["prop", "表单域 model 字段", "string", "传入 Form 组件的 model 中的字段", ""],
  ["label", "标签", "string", "", ""],
]
</script>

<style scoped>
.table {
  margin-bottom: 26px;
}
</style>
