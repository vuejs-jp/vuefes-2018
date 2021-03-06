import { mount, RouterLinkStub } from '@vue/test-utils'
import SpeakerWithLink from '~/components/SpeakerWithLink'

describe('SpeakerWithLink', () => {
  const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
  const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')

  test('img の srcset 属性をセットできる', () => {
    const wrapper = mount(SpeakerWithLink, {
      propsData: {
        id: 'yyx990803',
        name: 'Evan You',
        title: 'Vue.js クリエーター',
        avatar: AVATAR_EVAN,
        avatar2x: AVATAR_EVAN_2X,
        twitter: 'https://twitter.com/youyuxi',
        github: 'https://github.com/yyx990803',
        description: [
          'Evan は開発者、デザイナー、そしてクリエイティブコーダーです。彼は、リアクティブなコンポーネントでモダンな Web インターフェイスを構築するための JavaScript フレームワーク、Vue.js の作者です。',
          'かつて、GitHub で最もスターを集めたフルスタック JavaScript フレームワークであった Meteor の開発グループでも働いていました。Google Creative Lab で、さまざまな Google プロダクト向けの実験的な UI プロトタイプに、2年間取り組んでいた経験もあります。'
        ],
        sessionTitle: 'TBD',
        sessionOverview: ['TBD']
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.avatar img').attributes().srcset).toEqual(
      `${AVATAR_EVAN}, ${AVATAR_EVAN_2X} 2x`
    )
  })
})
