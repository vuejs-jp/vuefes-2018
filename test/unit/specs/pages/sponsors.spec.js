import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import SponsorsPage from '~/pages/sponsors'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const router = new VueRouter()
const store = () => createFullStore(Vuex)

localVue.use(VueRouter)
localVue.use(Vuex)

describe('SponsorsPage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(SponsorsPage, {
      localVue,
      router,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('SPONSORS')
  })
})
