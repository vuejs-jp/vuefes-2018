import { mount } from '@vue/test-utils'
import Sponsor from '~/components/Sponsor'

describe('SponsorGroup', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Sponsor, {
      propsData: {
        index: 0,
        type: 'platinum',
        name: '株式会社プレイド',
        url: 'https://plaid.co.jp/',
        banner: 'plaid.png',
        description: [
          'プレイドは、インターネットで欠如しているユーザーデータを蓄積するミドルウェアとなり、人の価値を最大化するためのサービスを提供します。',
        ],
      },
    })
  })

  it('type クラスが追加される', () => {
    expect(wrapper.classes()).to.contain('platinum')
  })

  it('type の文字が全大文字で表示される', () => {
    expect(wrapper.find('.heading').text()).to.contain('PLATINUM')
  })

  it('id が付与されている', () => {
    expect(wrapper.find('.sponsor').attributes().id).to.equal('platinum-0')
  })
})
