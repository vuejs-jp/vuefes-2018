import { mount } from '@vue/test-utils'
import Speaker from '~/components/Speaker'

describe('Speaker', () => {
  const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
  const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')

  test('img の srcset 属性をセットできる', () => {
    const wrapper = mount(Speaker, {
      propsData: {
        name: 'Evan You',
        title: 'Vue.js クリエーター',
        avatar: AVATAR_EVAN,
        avatar2x: AVATAR_EVAN_2X,
        twitter: 'https://twitter.com/youyuxi',
        github: 'https://github.com/yyx990803',
      },
      stubs: [
        'no-ssr',
      ],
    })

    expect(
      wrapper.find('.avatar img').attributes()['srcset']
    ).toEqual(`${AVATAR_EVAN}, ${AVATAR_EVAN_2X} 2x`)
  })
})
