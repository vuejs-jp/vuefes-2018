import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TheHeadSection from '~/components/TheHeadSection'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)

describe('TheHeadSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheHeadSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.text()).to.contain('秋葉原 UDX 4F')
  })
})
