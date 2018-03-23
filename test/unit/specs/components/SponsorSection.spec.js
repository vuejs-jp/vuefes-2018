import Vue from 'vue'
import SponsorSection from '~/components/SponsorSection'

describe('SponsorSection', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(SponsorSection)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('Be a Sponsor')
  })
})
