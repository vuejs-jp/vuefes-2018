import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import WelcomePage from '~/pages/index'
import store from '~/store/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('index', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(WelcomePage, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('Vue.js カンファレンス')
  })
})
