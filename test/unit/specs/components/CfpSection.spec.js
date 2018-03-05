import Vue from 'vue'
import CfpSection from '~/components/CfpSection'

describe('CfpSection', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(CfpSection)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('Call for papers')
  })
})
