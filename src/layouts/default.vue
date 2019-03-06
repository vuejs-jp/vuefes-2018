<template>
  <div class="layout">
    <div id="js-layout-wrapper">
      <div class="container">
        <TheHeader class="hide-on-medium-and-up" />
        <TheGlobalNavigation class="the-global-navigation hide-on-small" />

        <nuxt />
      </div>

      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter'
import TheGlobalNavigation from '~/components/TheGlobalNavigation'
import TheHeader from '~/components/TheHeader'

export default {
  name: 'CodeOfConductLayout',
  components: {
    TheFooter,
    TheGlobalNavigation,
    TheHeader
  }
}
</script>

<style lang="scss" scoped>
// モバイルでナビゲーションが表示されたときに body に class="header-fixed" が設定される
.header-fixed {
  .layout {
    padding-top: $header-height;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .layout {
    margin: 0 auto;
    max-width: $layout-max-width;
  }

  .container {
    display: flex;
  }

  .the-global-navigation {
    min-width: $side-area-width--is-small-up;
    height: $global-navigation-height;
  }
}
</style>
