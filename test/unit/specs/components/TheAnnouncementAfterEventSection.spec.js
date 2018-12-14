import { mount } from '@vue/test-utils'
import TheAnnouncementAfterEventSection from '~/components/TheAnnouncementAfterEventSection'

describe('TheAnnouncementAfterEventSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheAnnouncementAfterEventSection)
    expect(wrapper.text()).to.contain('THANK YOU!')
  })
})
