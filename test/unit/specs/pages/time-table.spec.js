import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TimeTablePage from '~/pages/time-table'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('TimeTablePage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TimeTablePage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('開場・受付')
  })
})
