import { mount } from '@vue/test-utils'
import BaseSection from '~/components/BaseSection'

describe('BaseSection', () => {
  context('theme が渡されているとき', () => {
    it('bg-xxx クラスが追加される', () => {
      const wrapper = mount(BaseSection, {
        propsData: {
          theme: 'yellow',
        },
      })

      expect(wrapper.classes()).to.contain('bg-yellow')
    })
  })
})
