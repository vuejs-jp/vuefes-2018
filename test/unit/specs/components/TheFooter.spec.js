import { mount, RouterLinkStub } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'

describe('TheFooter', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheFooter, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.find('.link-list').text()).toContain('Vue.js')
  })
})
