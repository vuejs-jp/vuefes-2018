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
  padding: 80px 40px;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    padding: 60px 5%;
  }
}

.heading {
  margin: 0;
  font-size: 60px;
  line-height: 1.1;
  text-align: center;
  color: $primary-color;

  @media screen and (max-width: $layout-breakpoint--is-small-up) {
    font-size: 14vw;
  }
}

.bg-green {
  background: url(/assets/images/symbol-mark.svg) left top no-repeat, $hiwamoegiGradient;
}

.bg-yellow {
  background: $tohohGradient;
}

.bg-red {
  background: $sangosyuGradient;
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .content {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
