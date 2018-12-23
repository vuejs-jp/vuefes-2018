import { mount, RouterLinkStub } from '@vue/test-utils'
import TheAnnouncementAfterEventSection from '~/components/TheAnnouncementAfterEventSection'

describe('TheAnnouncementAfterEventSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheAnnouncementAfterEventSection, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.text()).to.contain('THANK YOU!')
  })
})
