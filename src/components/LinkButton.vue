<template>
  <div class="base-button">
    <slot />
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'

export default {
  name: 'LinkButton',
  extends: BaseButton,
}
</script>

<style lang="scss" scoped src="./BaseButton.scss"></style>

<style lang="scss" scoped>
.base-button {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
}
</style>
