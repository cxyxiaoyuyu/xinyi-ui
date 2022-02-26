<template>
  <div class="tabs-pane" :class="{active}" v-if="active">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "XTabsPane",
};
</script>
<script lang="ts" setup>
import { inject, ref } from "vue";
const active = ref(false);
const props = defineProps({
  name: {
    type: [String, Number],
    required: true,
  },
});
const eventBus:any = inject('eventBus')
eventBus.on('update:selected',(name)=>{
  active.value = name === props.name
})
</script>
<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
  &.active {
  }
}
</style>
