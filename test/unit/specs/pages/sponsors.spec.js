import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import SponsorsPage from '~/pages/sponsors'

const localVue = createLocalVue()
const router = new VueRouter()
const store = () => createFullStore(Vuex)

localVue.use(VueRouter)
localVue.use(Vuex)

describe('SponsorsPage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(SponsorsPage, {
      localVue,
      router,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('SPONSORS')
  })
})
