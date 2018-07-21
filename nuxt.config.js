const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Fes Japan 2018 | 2018年11月3日（土）',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qns1qjx.css' },
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
      config.module.rules.push({
        test: /\.webp$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]',
        },
      })
    },
  },
  srcDir: 'src/',
  css: [
    { src: '~/assets/stylesheets/main.scss', lang: 'scss' },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    'nuxt-sass-resources-loader',
  ],
  plugins: [
    '~/plugins/axios',
  ],
  axios: {
    baseURL: 'https://vuefes2018-functions.azurewebsites.net/api',
  },
  env: {
    FUNCTION_KEY: process.env.FUNCTION_KEY,
  },
  'google-analytics': {
    id: 'UA-6976525-4',
  },
  sassResources: [
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/variables.scss'),
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/colors.scss'),
  ],
}
