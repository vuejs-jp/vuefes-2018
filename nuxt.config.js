const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Fes Japan 2018 | 2018年秋開催予定',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '日本で初めて開催する大規模Vue.jsカンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒にVue.jsを楽しみ、盛り上げていきましょう！' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Vue Fes Japan 2018' },
      { name: 'og:description', content: '日本で初めて開催する大規模Vue.jsカンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒にVue.jsを楽しみ、盛り上げていきましょう！' },
      { name: 'og:url', content: 'https://vuefes.jp' },
      { name: 'og:site_name', content: 'Vue Fes Japan 2018' },
      { name: 'og:image', content: 'https://vuefes.jp/opengraph.png' },
      { name: 'og:image:secure_url', content: 'https://vuefes.jp/opengraph.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: '日本で初めて開催する大規模Vue.jsカンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒にVue.jsを楽しみ、盛り上げていきましょう！' },
      { name: 'twitter:creator', content: '@vuefes' },
      { name: 'twitter:title', content: 'Vue Fes Japan 2018' },
      { name: 'twitter:image', content: 'https://vuefes.jp/opengraph.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  srcDir: 'src/',
  css: [
    { src: '~/assets/stylesheets/main.scss', lang: 'scss' },
  ],
  modules: [
    'nuxt-sass-resources-loader',
  ],
  sassResources: [
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/variables.scss'),
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/colors.scss'),
  ],
}
