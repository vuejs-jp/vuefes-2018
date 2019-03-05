import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import WelcomePage from '~/pages/index'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)
localVue.use(VueLazyload)

describe('index', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(WelcomePage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
        'no-ssr': '<div></div>',
      },
    })

    expect(wrapper.text()).toContain('SPEAKERS')
  })
})
