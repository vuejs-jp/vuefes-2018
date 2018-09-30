<template>
  <div class="heading-with-bar">
    <div class="bar"></div>
    <h3 class="heading">
      <slot />
    </h3>
  </div>
</template>

<script>
export default {
  name: 'HeadingWithBar',
}
</script>

<style lang="scss" scoped>
.heading-with-bar {
  margin-bottom: 10px;
}

.bar {
  width: 60px;
  border-top: solid 2px $primary-color;
}

.heading {
  font-size: 10px;
  font-weight: lighter;
}
</style>
