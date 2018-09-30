import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import VueLazyload from 'vue-lazyload'
import SponsorBanner from '~/components/SponsorBanner'

const localVue = createLocalVue()

localVue.use(VueLazyload)

describe('SponsorBanner', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SponsorBanner, {
      localVue,
      propsData: {
        index: 0,
        type: 'platinum',
        banner: 'plaid.png',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('type クラスが追加される', () => {
    expect(wrapper.classes()).to.contain('platinum')
  })

  it('type が大文字で表示される', () => {
    expect(wrapper.find('.heading-with-bar').text()).to.contain('PLATINUM')
  })

  it('スポンサーの ID へのリンクが設置されている', () => {
    expect(wrapper.find('.link-to-sponsor').props().to).to.equal('/sponsors/#platinum-0')
  })
})
