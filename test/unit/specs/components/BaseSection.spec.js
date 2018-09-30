import { mount } from '@vue/test-utils'
import BaseSection from '~/components/BaseSection'

describe('BaseSection', () => {
  context('theme が渡されているとき', () => {
    it('bg-xxx クラスが追加される', () => {
      const wrapper = mount(BaseSection, {
        propsData: {
          theme: 'yellow',
        },
        slots: {
          heading: '<span>TICKET</span>', // 'TICKET' だと $slots.default に入ってしまう
        },
      })

      expect(
        wrapper.find('.heading-container').classes()
      ).to.contain('bg-yellow')
    })
  })
})
