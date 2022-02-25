<template>
  <div class="gulu-tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "XTabsItem",
};
</script>
<script lang="ts" setup>
import { computed, getCurrentInstance, ref } from 'vue'
import eventBus from '../util/bus'
const active = ref(false)
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: [ String, Number],
    required: true
  }
})
const emit = defineEmits(['click'])

const tabsItem = getCurrentInstance()
const classes = computed(()=>{
  return {
    active: active.value,
    disabled: props.disabled
  }
})

const onClick = () => {
  if (props.disabled) { return }
  eventBus.emit('update:selected', props.name)
}

eventBus.on('update:selected',(name)=>{
  active.value =  name === props.name
})

</script>
<style lang="scss" scoped>
$blue: #409eff;
$disabled-text-color: grey;
.gulu-tabs-item {
  flex-shrink: 0;
  padding: 0 20px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
