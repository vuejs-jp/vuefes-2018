import { mount } from '@vue/test-utils'
import AppButton from '~/components/AppButton'

describe('AppButton', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(AppButton)
    expect(wrapper.classes()).to.contain('app-button')
  })
})
