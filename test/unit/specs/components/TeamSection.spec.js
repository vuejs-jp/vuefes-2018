import Vue from 'vue'
import TeamSection from '~/components/TeamSection'

describe('TeamSection', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(TeamSection)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('About us')
  })
})
