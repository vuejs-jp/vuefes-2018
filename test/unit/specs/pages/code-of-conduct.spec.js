import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import codeOfConductPage from '~/pages/code-of-conduct'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('CodeOfConductPage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(codeOfConductPage, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('行動規範')
  })
})
