import { mount } from '@vue/test-utils'
import SponsorBannerGroup from '~/components/SponsorBannerGroup'

describe('SponsorBannerGroup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SponsorBannerGroup, {
      propsData: {
        group: 'platinum',
        sponsors: [
          { banner: 'plaid.png' },
        ],
      },
    })
  })

  it('group クラスが追加される', () => {
    expect(wrapper.classes()).to.contain('platinum')
  })

  it('group の先頭文字が大文字で表示される', () => {
    expect(wrapper.find('.heading').text()).to.contain('Platinum')
  })
})
