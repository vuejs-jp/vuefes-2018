import Vue from 'vue'
import ConversionButton from '~/components/ConversionButton'

describe('ConversionButton', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(ConversionButton)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.className).to.equal('conversion-button')
  })
})
