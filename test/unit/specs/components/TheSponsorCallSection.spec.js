import { mount } from '@vue/test-utils'
import TheSponsorCallSection from '~/components/TheSponsorCallSection'

describe('TheSponsorCallSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheSponsorCallSection)
    expect(wrapper.text()).to.contain('Be a Sponsor')
  })
})
