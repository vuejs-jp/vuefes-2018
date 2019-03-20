// SyntaxError: Unexpected token import
// import * as speakers from 'src/store/speakers'

import fs from 'fs'
const StylelintPlugin = require('stylelint-webpack-plugin')

// ERROR  (node:79384) DeprecationWarning: Tapable.plugin is deprecated. Use new API on .hooks instead の詳細を確認するため
process.traceDeprecation = true

try {
  fs.statSync('.env')
  require('dotenv').config()
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('.env file NOT FOUND') // eslint-disable-line no-console
  } else {
    throw error
  }
}

const defaultUrl = 'https://vuefes.jp/2018/'
const defaultTitle = 'Vue Fes Japan 2018 | 2018年11月3日（土）'
const defaultDescription =
  '日本で初めて開催する大規模 Vue.js カンファレンス。国内外の著名スピーカーによるセッションの他、ユーザー同士が気軽に話し合える場も設ける予定です。ぜひ、一緒に Vue.js を楽しみ、盛り上げていきましょう！'
const defaultOgImageUrl = 'https://vuefes.jp/2018/opengraph.jpg'

export default {
  mode: 'universal',
  srcDir: 'src/',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: defaultTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'ja_JP' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Vue Fes Japan 2018' },
      { name: 'twitter:creator', content: '@vuefes' },
      { hid: 'description', name: 'description', content: defaultDescription },
      { hid: 'og:url', name: 'og:url', content: defaultUrl },
      { hid: 'og:title', name: 'og:title', content: defaultTitle },
      {
        hid: 'og:description',
        name: 'og:description',
        content: defaultDescription
      },
      { hid: 'og:image', name: 'og:image', content: defaultOgImageUrl },
      {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: defaultOgImageUrl
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:title', name: 'twitter:title', content: defaultTitle },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: defaultDescription
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: defaultOgImageUrl
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
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
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
      config.module.rules.push({
        test: /\.webp$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      })
    }
  },
  css: [{ src: '~/assets/stylesheets/main.scss', lang: 'scss' }],
  router: {
    base: '/2018/',
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    }
  },
  generate: {
    dir: 'dist/2018',
    // TODO: speakers.getters.speakerIds を使うやり方に書き換えたい
    // routes: speakers.getters.speakerIds(speakers.state()).map(speakerId => `/speakers/${speakerId}`),
    routes: [
      'yyx990803',
      'sdras',
      'Atinux',
      'eddyerburgh',
      'znck',
      'Akryum',
      'ktsn',
      'fukuiretu',
      'takanorip',
      'ts020',
      'tsuchikazu'
    ].map(speakerId => `/speakers/${speakerId}`)
  },
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/pwa',
      {
        icon: {
          iconSrc: 'src/static/apple-touch-icon.png'
        }
      }
    ]
  ],
  plugins: [
    { src: '~/plugins/global-navigation-handler', ssr: false },
    { src: '~/plugins/typekit', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],
  env: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || 'PLEASE_SET_ME'
  },
  'google-analytics': {
    id: process.env.GA_TRACKING_ID || 'UA-XXXXXXX-X'
  },
  styleResources: {
    scss: [
      '~/assets/stylesheets/foundation/variables.scss',
      '~/assets/stylesheets/foundation/colors.scss'
    ]
  }
}
