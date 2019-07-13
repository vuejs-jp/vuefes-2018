import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import TheHeader from '~/components/TheHeader'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)
const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

localVue.use(Vuex)

describe('TheHeader', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TheHeader, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.isGlobalNavigationShown).toEqual(false)
    wrapper.vm.toggleGlobalNavigation()
    delay(800).then(() => {
      expect(wrapper.vm.isGlobalNavigationShown).toEqual(true)
    })
  })
})
