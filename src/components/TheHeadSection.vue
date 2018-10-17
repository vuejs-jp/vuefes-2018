<template>
  <div class="the-head-section">
    <div class="hide-on-medium-and-up">
      <TheHeader />
      <img class="head-image" src="~/assets/images/head@2x.jpg" alt="Vue Fes Japan 2018 | 2018.11.3 [Sat.] | 秋葉原 UDX 4F UDX ギャラリー">
    </div>

    <div class="wrapper hide-on-small">
      <TheGlobalNavigation class="the-global-navigation" />
      <img class="head-image" src="~/assets/images/head.jpg">
    </div>
  </div>
</template>

<script>
import TheGlobalNavigation from '~/components/TheGlobalNavigation'
import TheHeader from '~/components/TheHeader'

export default {
  name: 'TheHeadSection',
  components: {
    TheGlobalNavigation,
    TheHeader,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: $layout-breakpoint--is-small) {
  // モバイルでナビゲーションが表示されたときに body に class="header-fixed" が設定される
  .header-fixed {
    .head-image {
      padding-top: $header-height;
    }
  }

  .head-image {
    display: block;
    width: 100%;
  }
}

@media screen and (min-width: $layout-breakpoint--is-small-up) {
  .wrapper {
    display: flex;
    overflow: hidden;
  }

  .the-global-navigation {
    width: $side-area-width--is-small-up;
    min-width: $side-area-width--is-small-up;
    height: $global-navigation-height;
  }

  .head-image {
    width: $page-content-max-width;
    min-width: $page-content-max-width;
    height: $global-navigation-height;
  }
}
</style>
