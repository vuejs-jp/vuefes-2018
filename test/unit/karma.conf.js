const path = require('path')

// Karma configuration
// Generated on Mon Feb 19 2018 00:24:28 GMT+0900 (JST)

module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      'test/unit/specs/**/*.spec.js',
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/specs/**/*.spec.js': ['webpack'],
    },

    webpack: {
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          '~': path.resolve(__dirname, '../../src'),
          assets: path.resolve(__dirname, '../../src/assets'), // use in template with <img src="~/assets/nuxt.png" />
        },
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                js: [
                  {
                    loader: 'babel-loader',
                    options: {
                      plugins: ['transform-object-rest-spread'],
                    },
                  },
                ],
                scss: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader',
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      resources: [
                        './src/assets/stylesheets/foundation/variables.scss',
                        './src/assets/stylesheets/foundation/colors.scss',
                      ],
                    },
                  },
                ],
              },
            },
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
          },
        ],
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  })
}
