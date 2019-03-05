import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import AboutPage from '~/pages/about'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)
localVue.use(VueLazyload)

describe('AboutPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(AboutPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).toContain('日本で初めて開催する Vue.js カンファレンス')
  })
})
