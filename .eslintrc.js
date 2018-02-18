const path = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',

    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue'],
            alias: {
              // FIXME: src/pages/index.vue
              // 26:21  error  Unable to resolve path to module '~/components/AppLogo.vue'  import/no-unresolved
              '~': path.resolve(__dirname, 'src'),
            }
          }
        },
      }
    }
  },
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'max-len': 'off',

    // JavaScript Standard Style
    // http://standardjs.com/rules.html
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always',
    }],
  }
}
