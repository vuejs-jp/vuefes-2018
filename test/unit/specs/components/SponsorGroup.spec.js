import { mount } from '@vue/test-utils'
import SponsorGroup from '~/components/SponsorGroup'

describe('SponsorGroup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SponsorGroup, {
      propsData: {
        group: 'platinum',
        sponsors: [
          {
            name: '株式会社プレイド',
            url: 'https://plaid.co.jp/',
            banner: 'plaid.png',
            description: 'プレイドは、インターネットで欠如しているユーザーデータを蓄積するミドルウェアとなり、人の価値を最大化するためのサービスを提供します。',
          },
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

  it('id が付与されている', () => {
    expect(wrapper.find('.sponsor').attributes().id).to.equal('platinum-株式会社プレイド')
  })
})
