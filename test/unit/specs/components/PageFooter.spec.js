import Vue from 'vue'
import PageFooter from '~/components/PageFooter'

describe('PageFooter', () => {
  let Constructor
  let vm

  beforeEach(() => {
    Constructor = Vue.extend(PageFooter)
    vm = new Constructor().$mount()
  })

  it('レンダリングできる', () => {
    expect(
      vm.$el.querySelector('.link-list').textContent
    ).to.contain('Vue.js')
  })
})
