import Vue from 'vue'
import index from '~/pages/index'

describe('index', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(index)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('Vue.js カンファレンス')
  })
})
