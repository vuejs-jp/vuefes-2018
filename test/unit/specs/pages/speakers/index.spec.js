import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../../utils/createFullStore'
import SpeakersPage from '~/pages/speakers/index'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('SpeakersPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(SpeakersPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('SPEAKERS')
  })
})
