<template>
  <div class="app-button">
    <slot />
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
export default {
  name: 'link-button',
  extends: AppButton,
}
</script>

<style lang="scss" scoped src="./AppButton.scss"></style>
<style lang="scss" scoped>
.app-button {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
</style>
