import { mount } from '@vue/test-utils'
import BaseSection from '~/components/BaseSection'

describe('BaseSection', () => {
  describe('theme が渡されているとき', () => {
    test('bg-xxx クラスが追加される', () => {
      const wrapper = mount(BaseSection, {
        propsData: {
          theme: 'yellow'
        },
        slots: {
          heading: '<span>TICKET</span>' // 'TICKET' だと $slots.default に入ってしまう
        }
      })

      expect(wrapper.find('.heading-container').classes()).toContain(
        'bg-yellow'
      )
    })
  })
})
