<template>
  <div class="heading-with-bar" :class="theme">
    <div class="bar" />
    <h3 class="heading">
      <slot />
    </h3>
  </div>
</template>

<!-- eslint-disable vue/require-default-prop -->
<script>
export default {
  name: 'HeadingWithBar',
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

.blue {
  .bar {
    border-color: $asagi;
  }

  .heading {
    color: $asagi;
  }
}

.red {
  .bar {
    border-color: $sangosyu;
  }

  .heading {
    color: $sangosyu;
  }
}
</style>
