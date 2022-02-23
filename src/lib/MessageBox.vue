<template>
  <Teleport to="body">
    <div class="gulu-message-overlay" @click="close"></div>
    <div class="gulu-message-wrapper">
      <div class="gulu-message">
        <header>
          <span>{{title}}</span>
          <span @click="close" class="gulu-message-close"></span>
        </header>
        <main> {{content}} </main>
        <footer>
          <Button type="primary" @click="ok">确定</Button>
          <Button @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import Button from "./Button.vue";
defineProps({
  title: {
    type: String,
    default: '提示' 
  },
  content: {
    type: String,
  }
})
const emit = defineEmits(['ok','cancel','close'])
const cancel = () => {
  emit('cancel')
}
const ok = () => {
  emit('ok')
}
const close = () => {
  emit('close')
} 
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-message {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 400px;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>