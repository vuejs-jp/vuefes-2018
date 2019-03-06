import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TheHeadSection from '~/components/TheHeadSection'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('TheHeadSection', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheHeadSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('秋葉原 UDX 4F')
  })
})
