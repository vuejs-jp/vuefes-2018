import Vue from 'vue'
import SpeakerSection from '~/components/SpeakerSection'

describe('SpeakerSection', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(SpeakerSection)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.textContent).to.contain('Speaker')
  })
})
