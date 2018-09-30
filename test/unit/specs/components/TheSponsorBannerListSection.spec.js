import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import TheSponsorBannerListSection from '~/components/TheSponsorBannerListSection'
import createFullStore from '../utils/createFullStore'

const localVue = createLocalVue()
const store = () => createFullStore(Vuex)

localVue.use(Vuex)
localVue.use(VueLazyload)

describe('TheSponsorBannerListSection', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TheSponsorBannerListSection, {
      localVue,
      store,
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('レンダリングできる', () => {
    expect(wrapper.text()).to.contain('SPONSORS')
  })

  it('リンクに Trailing Slash が入っている', () => {
    expect(wrapper.find('.link-to-sponsors').props().to).to.equal('/sponsors/')
  })
})
