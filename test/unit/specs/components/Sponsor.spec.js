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

  test('type クラスが追加される', () => {
    expect(wrapper.classes()).toContain('platinum')
  })

  test('type の文字が全大文字で表示される', () => {
    expect(wrapper.find('.heading').text()).toContain('PLATINUM')
  })

  test('id が付与されている', () => {
    expect(wrapper.find('.sponsor').attributes().id).toEqual('platinum-0')
  })
})
