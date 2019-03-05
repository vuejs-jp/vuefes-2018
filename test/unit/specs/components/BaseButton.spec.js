import { mount } from '@vue/test-utils'
import BaseButton from '~/components/BaseButton'

describe('BaseButton', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('base-button')
  })
})
