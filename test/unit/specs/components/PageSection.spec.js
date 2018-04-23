import { mount } from '@vue/test-utils'
import PageSection from '~/components/PageSection'

describe('PageSection', () => {
  context('theme が渡されているとき', () => {
    it('bg-xxx クラスが追加される', () => {
      const wrapper = mount(PageSection, {
        propsData: {
          theme: 'yellow',
        },
      })

      expect(wrapper.classes()).to.contain('bg-yellow')
    })
  })
})
