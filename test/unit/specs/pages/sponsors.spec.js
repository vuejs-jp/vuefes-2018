import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import SponsorsPage from '~/pages/sponsors'
import store from '~/store/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('sponsors', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(SponsorsPage, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('Sponsors')
  })
})
