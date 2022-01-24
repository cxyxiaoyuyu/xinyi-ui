<template>
  <svg class="gulu-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import "../assets/svg.js";
export default {
  name: 'XIcon',
  props: ["icon"],
};
</script>

<style lang="scss" scoped>
.gulu-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>