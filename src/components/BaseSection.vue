<template>
  <section class="base-section" :class="`bg-${theme}`">
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
  name: 'BaseSection',
  props: {
    theme: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.base-section {
  position: relative;
  padding: 60px 5%;

  h2, .content {
    position: relative;
    z-index: 100;
  }
}

.base-section::before {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
  content: '';
  background-size: 64px 64px;
  background-image: url('~/assets/images/texture.png');
}

.heading {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14vw;
  line-height: 1.3;
  text-align: center;
  color: $primary-color;

  // font-size の最大値を 60px にする
  @media screen and (min-width: 428px) {
    font-size: 60px;
  }
}

.bg-green {
  background: url('~/assets/images/symbol-mark.svg') left top no-repeat, $hiwamoegiGradient;
}

.bg-yellow {
  background: $tohohGradient;
}

.bg-red {
  background: $sangosyuGradient;
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .bage-section {
    padding: 80px 40px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-medium-up) {
  .content {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
