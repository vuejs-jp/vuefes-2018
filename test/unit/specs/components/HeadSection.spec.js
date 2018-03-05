import Vue from 'vue'
import HeadSection from '~/components/HeadSection'

describe('HeadSection', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(HeadSection)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('Vue.js をもっと楽しむための祭典')
  })
})
