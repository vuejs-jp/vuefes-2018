import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

require('intersection-observer')

Vue.use(VueLazyload, {
  throttleWait: 100,
  observer: true,
  observerOptions: {
    rootMargin: '2160px',
    threshold: 0
  }
})
