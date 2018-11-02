<template>
  <div class="layout">
    <div id="js-layout-wrapper">
      <div class="container">
        <TheHeader class="hide-on-medium-and-up" />
        <TheGlobalNavigation class="the-global-navigation hide-on-small" />

        <nuxt/>
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
    TheHeader,
  },
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: '日本で初めて開催する大規模 Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！' },
        { name: 'og:locale', content: 'ja_JP' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: 'Vue Fes Japan 2018' },
        { name: 'og:description', content: '日本で初めて開催する大規模 Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！' },
        { name: 'og:url', content: 'https://vuefes.jp' },
        { name: 'og:site_name', content: 'Vue Fes Japan 2018' },
        { name: 'og:image', content: 'https://vuefes.jp/opengraph.jpg' },
        { name: 'og:image:secure_url', content: 'https://vuefes.jp/opengraph.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: '日本で初めて開催する大規模 Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！' },
        { name: 'twitter:creator', content: '@vuefes' },
        { name: 'twitter:title', content: 'Vue Fes Japan 2018' },
        { name: 'twitter:image', content: 'https://vuefes.jp/opengraph.jpg' },
      ],
    }
  },
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
