import { mount } from '@vue/test-utils'
import codeOfConduct from '~/pages/code-of-conduct'

describe('code-of-conduct', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(codeOfConduct)
    expect(wrapper.text()).to.contain('行動規範')
  })
})
