<template>
 <div class="topNav">
  <div class="logo">
    <div class="icon" @click="toggleAside"></div>
    Xinyi UI
  </div>
  <div class="navlist">
    <ul>
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/doc">文档</router-link></li>
      <li><a href="">GitHub</a></li>
    </ul>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref } from 'vue'
export default defineComponent({
  name: '',
  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible') as Ref<boolean>
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return{ toggleAside }
  }
})
</script>

<style lang="scss" scoped>
.topNav {
  height: 60px;
  border-bottom: 1px solid #eaecef;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .logo {
    cursor: pointer; 
    font-weight: bold;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      >.icon {
        width: 20px;
        height: 20px;
        background: red;
        margin-right: 10px;
        display: block; 
      } 
    }
  }
  .navlist {
    ul {
      display: flex;
      align-items: center;
      li {
        padding: 10px; 
        .active {
          color: #3eaf7c; 
        }
      }
    }
  }
}

</style>