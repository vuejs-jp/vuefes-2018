import { mount, RouterLinkStub } from '@vue/test-utils'
import TheAnnouncementAfterEventSection from '~/components/TheAnnouncementAfterEventSection'

describe('TheAnnouncementAfterEventSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheAnnouncementAfterEventSection, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).toContain('THANK YOU!')
  })
})
