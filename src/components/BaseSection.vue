<template>
  <section class="base-section">
    <div v-if="$slots.heading" class="heading-container" :class="`bg-${theme}`">
      <h2 class="heading">
        <slot name="heading" />
      </h2>
    </div>

    <div class="content">
      <slot />
    </div>
  </section>
</template>

<!-- eslint-disable vue/require-default-prop -->
<script>
export default {
  name: 'BaseSection',
  props: {
    theme: {
      type: String,
      required: false
    }
  }
}
</script>
<!-- eslint-enable vue/require-default-prop -->

<style lang="scss" scoped>
.base-section {
  display: flex;
}

.heading-container {
  width: $side-area-width--is-small;
  padding: 6.25vw 0 0;

  &.bg-blue {
    background-color: $asagi;
  }

  &.bg-yellow {
    background-color: $tohoh;
  }

  &.bg-red {
    background-color: $sangosyu;
  }

  &.bg-green {
    background-color: $hiwamoegi;
  }
}

.heading {
  margin: 0;
  font-size: 6.25vw;
  font-weight: 300;
  color: $primary-text-color--is-bg-dark;
  letter-spacing: 1px;
  white-space: nowrap;
  transform: rotate(90deg);
}

.content {
  width: 100%;
  padding: 20px 12px 24px;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .heading-container {
    width: $side-area-width--is-small-up;
    min-width: $side-area-width--is-small-up;
    padding: 12px 20px;
  }

  .heading {
    font-size: 36px;
    font-weight: lighter;
    transform: rotate(0);
  }

  .content {
    padding: 30px;
  }
}
</style>
