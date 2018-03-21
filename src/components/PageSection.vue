<template>
  <section class="page-section" :class="`bg-${theme}`">
    <h2 v-if="$slots.heading" class="heading">
      <slot name="heading" />
    </h2>

    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-section',
  props: {
    theme: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.page-section {
  padding: 24px 16px 56px;
}

.heading {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.3;
  text-align: center;
  color: $primary-color;
}

.bg-green {
  background-color: $hiwamoegi;
}

.bg-yellow {
  background-color: $tohoh;
}

.bg-red {
  background-color: $sangosyu;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .page-section {
    padding: 60px 40px 80px;
  }
}
</style>
