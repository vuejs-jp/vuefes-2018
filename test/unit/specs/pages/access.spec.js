import { mount, RouterLinkStub } from '@vue/test-utils'
import AccessPage from '~/pages/access'

describe('AccessPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(AccessPage, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('会場: 秋葉原 UDX 4F / UDX ギャラリー')
  })
})
