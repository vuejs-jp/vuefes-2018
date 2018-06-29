import { mount } from '@vue/test-utils'
import TheSponsorSection from '~/components/TheSponsorSection'

describe('TheSponsorSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheSponsorSection)
    expect(wrapper.text()).to.contain('Be a Sponsor')
  })
})
