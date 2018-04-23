import { mount } from '@vue/test-utils'
import SponsorSection from '~/components/SponsorSection'

describe('SponsorSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(SponsorSection)
    expect(wrapper.text()).to.contain('Be a Sponsor')
  })
})
