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
        name: '株式会社プレイド',
        banner: 'plaid.png',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  test('type クラスが追加される', () => {
    expect(wrapper.classes()).toContain('platinum')
  })

  test('type が大文字で表示される', () => {
    expect(wrapper.find('.heading-with-bar').text()).toContain('PLATINUM')
  })

  test('スポンサーの ID へのリンクが設置されている', () => {
    expect(wrapper.find('.link-to-sponsor').props().to).toEqual('/sponsors/#platinum-0')
  })
})
