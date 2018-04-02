import Vue from 'vue'
import AppButton from '~/components/AppButton'

describe('AppButton', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(AppButton)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.className).to.equal('app-button')
  })
})
