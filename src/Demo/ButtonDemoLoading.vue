<demo>图标按钮</demo>

<template>
  <span>点击按钮切换状态</span>
  <div style="margin-top: 8px;">
    <Button 
      type="primary" 
      :loading="loading" 
      @click="toggleLoading"
    >{{text}}
    </Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Icon from "../lib/Icon.vue";
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  components: { Button, Icon },
  setup(){
    const loading = ref(true) 
    const toggleLoading = () => {
      loading.value = !loading.value
    }
    const text = computed(()=>{
      if(loading.value){
        return '正在加载' 
      } 
      return '加载完成'
    })
    return { loading,toggleLoading,text }
  }
});
</script>