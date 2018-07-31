import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'
import store from '~/store/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TheSponsorBannerListSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheSponsorBannerListSection, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.text()).to.contain('Sponsors')
  })
})
