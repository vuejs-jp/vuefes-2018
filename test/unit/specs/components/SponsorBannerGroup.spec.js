import { mount, RouterLinkStub } from '@vue/test-utils'
import SponsorBannerGroup from '~/components/SponsorBannerGroup'

describe('SponsorBannerGroup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SponsorBannerGroup, {
      propsData: {
        group: 'platinum',
        sponsors: [
          {
            name: '株式会社プレイド',
            banner: 'plaid.png',
          },
        ],
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
  })

  it('group クラスが追加される', () => {
    expect(wrapper.classes()).to.contain('platinum')
  })

  it('group の先頭文字が大文字で表示される', () => {
    expect(wrapper.find('.heading').text()).to.contain('Platinum')
  })

  it('スポンサーの ID へのリンクが設置されている', () => {
    expect(wrapper.find('.link-to-sponsor').props().to).to.equal('/sponsors/#platinum-株式会社プレイド')
  })
})
