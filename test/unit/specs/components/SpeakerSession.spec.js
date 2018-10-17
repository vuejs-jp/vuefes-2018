import { mount, RouterLinkStub } from '@vue/test-utils'
import SpeakerSession from '~/components/SpeakerSession'

describe('SpeakerSession', () => {
  const AVATAR_EVAN = require('~/assets/images/speakers/evan.jpg')
  const AVATAR_EVAN_2X = require('~/assets/images/speakers/evan@2x.jpg')

  it('img の srcset 属性をセットできる', () => {
    const wrapper = mount(SpeakerSession, {
      propsData: {
        id: 'yyx990803',
        name: 'Evan You',
        avatar: AVATAR_EVAN,
        avatar2x: AVATAR_EVAN_2X,
        sessionTitle: 'キーノート',
        theme: 'blue',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })

    expect(
      wrapper.find('.avatar img').attributes()['srcset']
    ).to.equal(`${AVATAR_EVAN}, ${AVATAR_EVAN_2X} 2x`)
  })
})
