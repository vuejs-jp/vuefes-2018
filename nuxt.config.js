const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuefes-2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Fes Japan 2018' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
