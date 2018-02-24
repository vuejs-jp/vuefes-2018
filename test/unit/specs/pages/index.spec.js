import Vue from 'vue'
import index from '~/pages/index.vue'

describe('index', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(index)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(
      vm.$el.querySelector('.subtitle').textContent
    ).to.contain('Vue Fes Japan 2018')
  })
})
