<demo>基础使用</demo>

<template>
  <x-form :model="userInfo" :rules="rules" ref="loginForm">
    <x-form-item label="用户名" prop="username">
      <x-input v-model="userInfo.username" placeholder="请输入用户名"></x-input>
    </x-form-item>
    <x-form-item label="密码" prop="password">
      <x-input
        type="password"
        v-model="userInfo.password"
        placeholder="请输入密码"
      ></x-input>
    </x-form-item>
    <x-form-item>
      <x-button @click="login">登录</x-button>
    </x-form-item>
  </x-form>
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";

const userInfo = reactive({
  username: "tom",
  password: "123",
});
const rules = reactive({
  username: [{ required: true, message: "请输入用户名" }],
  password: [{ required: true, message: "请输入密码" }],
});

const loginForm = ref(null)

const login = () => {
  console.log("login");
  console.log(loginForm.value)  
};
</script>

<style lang="scss" scoped></style>
