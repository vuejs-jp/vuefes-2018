import { mount } from '@vue/test-utils'
import codeOfConductPage from '~/pages/code-of-conduct'

describe('CodeOfConductPage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(codeOfConductPage)
    expect(wrapper.text()).to.contain('行動規範')
  })
})
