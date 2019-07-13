import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import createFullStore from '../utils/createFullStore'
import TimeTablePage from '~/pages/time-table'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('TimeTablePage', () => {
  test('レンダリングできる', () => {
    const wrapper = mount(TimeTablePage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).toContain('開場・受付')
  })
})
