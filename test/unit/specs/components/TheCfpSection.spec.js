import { mount } from '@vue/test-utils'
import TheCfpSection from '~/components/TheCfpSection'

describe('TheCfpSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheCfpSection)
    expect(wrapper.text()).to.contain('Call for Papers')
  })
})
