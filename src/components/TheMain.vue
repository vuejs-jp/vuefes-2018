<template>
  <main class="the-main">
    <div class="page-title-container" :class="`bg-${theme}`">
      <h1 class="page-title">
        <slot name="page-title" />
      </h1>
    </div>

    <div class="content">
      <slot />
    </div>
  </main>
</template>

<!-- eslint-disable vue/require-default-prop -->
<script>
export default {
  name: 'TheMain',
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
.the-main {
  display: flex;
}

.content {
  width: 100%;
  padding: 15px 3.75% 50px;

  p + p {
    margin-top: 32px;
  }
}

.page-title-container {
  background-color: $hiwamoegi;
  margin: 0;
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

.page-title {
  margin: 0;
  font-size: 6.25vw;
  font-weight: 300;
  color: $primary-text-color--is-bg-dark;
  letter-spacing: 1px;
  white-space: nowrap;
  transform: rotate(90deg);

  // font-size の最大値を 48px にする
  @media screen and (min-width: 600px) {
    font-size: 48px;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .the-main {
    display: block;
    flex: 1;
    max-width: $layout-max-width - $side-area-width--is-small-up;
  }

  .content {
    padding: 30px 30px 50px;
  }

  .page-title-container {
    width: 100%;
    max-width: $layout-max-width - $side-area-width--is-small-up;
    padding: 20px 30px;
    font-size: 48px;

    br {
      display: none;
    }
  }

  .page-title {
    width: 100%;
    transform: rotate(0);
  }
}
</style>
