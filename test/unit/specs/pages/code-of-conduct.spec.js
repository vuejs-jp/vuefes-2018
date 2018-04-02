import Vue from 'vue'
import codeOfConduct from '~/pages/code-of-conduct'

describe('code-of-conduct', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(codeOfConduct)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('行動規範')
  })
})
