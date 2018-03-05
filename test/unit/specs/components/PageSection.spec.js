import Vue from 'vue'
import PageSection from '~/components/PageSection'

describe('PageSection', () => {
  function getVm (propsData) {
    const Constructor = Vue.extend(PageSection)
    return new Constructor({ propsData }).$mount()
  }

  context('theme が渡されているとき', () => {
    it('bg-xxx クラスが追加される', () => {
      const vm = getVm({ theme: 'yellow' })
      expect(vm.$el.className).to.contain('bg-yellow')
    })
  })
})
