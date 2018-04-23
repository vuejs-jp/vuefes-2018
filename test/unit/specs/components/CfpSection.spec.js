import { mount } from '@vue/test-utils'
import CfpSection from '~/components/CfpSection'

describe('CfpSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(CfpSection)
    expect(wrapper.text()).to.contain('Call for Papers')
  })
})
