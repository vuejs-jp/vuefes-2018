import { mount } from '@vue/test-utils'
import BaseButton from '~/components/BaseButton'

describe('BaseButton', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).to.contain('base-button')
  })
})
