// SyntaxError: Unexpected token import
// import * as speakers from 'src/store/speakers'

const fs = require('fs')
const path = require('path')

try {
  fs.statSync('.env')
  require('dotenv').config()
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('.env file NOT FOUND')
  } else {
    throw error
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'Vue Fes Japan 2018 | 2018年11月3日（土）',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [
      { src: '//j.wovn.io/1', 'data-wovnio': 'key=JjtoU_', defer: 'defer', body: 'true' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
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
    vendor: [
      'axios',
      'intersection-observer',
      'vue-lazyload',
    ],

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
  router: {
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    },
  },
  generate: {
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
      'tsuchikazu',
    ].map(speakerId => `/speakers/${speakerId}`),
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    'nuxt-sass-resources-loader',
    [
      '@nuxtjs/pwa',
      {
        icon: {
          iconSrc: 'src/static/apple-touch-icon.png',
        },
      },
    ],
  ],
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/global-navigation-handler', ssr: false },
    { src: '~/plugins/typekit', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
  ],
  axios: {
    baseURL: 'https://vuefes2018-functions.azurewebsites.net/api',
  },
  env: {
    functionKey: process.env.FUNCTION_KEY || 'PLEASE_SET_ME',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || 'PLEASE_SET_ME',
  },
  'google-analytics': {
    id: process.env.GA_TRACKING_ID || 'UA-XXXXXXX-X',
  },
  sassResources: [
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/variables.scss'),
    path.resolve(__dirname, 'src/assets/stylesheets/foundation/colors.scss'),
  ],
}
