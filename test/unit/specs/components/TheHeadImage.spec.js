import Vue from 'vue'
import TheHeadImage from '~/components/TheHeadImage'

describe('TheHeadImage', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(TheHeadImage)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(vm.$el.className).to.equal('the-head-image')
  })
})
