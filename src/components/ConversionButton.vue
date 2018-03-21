<template>
  <button class="conversion-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'conversion-button',
}
</script>

<style lang="scss" scoped>
$button-height: 60px;

.conversion-button {
  background-color: $primary-color;
  width: 100%;
  height: $button-height;
  border-radius: 1px;
  text-align: center;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);

  a {
    display: inline-block;
    width: 100%;
    line-height: $button-height;
    font-size: 18px;
    color: $primary-text-color--is-bg-dark;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  $button-height: 82px;

  .conversion-button {
    width: 456px;
    height: $button-height;
    text-align: center;

    a {
      width: 100%;
      line-height: $button-height;
      font-size: 32px;
    }
  }
}
</style>
