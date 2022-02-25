<demo>基础使用</demo>

<template>
  <x-form :model="userInfo" :rules="rules" ref="loginForm">
    <x-form-item label="用户名" prop="username">
      <x-input
        v-model="userInfo.username"
        placeholder="请输入用户名"
        clear
      ></x-input>
    </x-form-item>
    <x-form-item label="密码" prop="password">
      <x-input
        v-model="userInfo.password"
        placeholder="请输入密码"
        clear
      ></x-input>
    </x-form-item>
    <x-form-item>
      <x-button @click="login" type="primary">登录</x-button>
      <x-button @click="reset" type="warning">重置</x-button>
    </x-form-item>
  </x-form>
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
import { openMessageBox } from "../../lib";

const userInfo = reactive({
  password: "12333",
  username: 'tom'
});
const rules = reactive({
  username: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
});

const loginForm = ref(null)

const login = () => {
  loginForm.value.validate(valid => {
    console.log(valid) 
    if(valid){
      openMessageBox({title: '提示',content: '登录成功'}) 
    }
  })
};
const reset = () => {
  loginForm.value.resetFields()
}
</script>

<style lang="scss" scoped></style>
