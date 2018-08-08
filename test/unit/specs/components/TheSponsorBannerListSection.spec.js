import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'
import store from '~/store/index'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TheSponsorBannerListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorBannerListSection, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('レンダリングできる', () => {
    expect(wrapper.text()).to.contain('Sponsors')
  })

  it('リンクに Trailing Slash が入っている', () => {
    expect(wrapper.find('.link-to-sponsors').props().to).to.equal('/sponsors/')
  })
})
