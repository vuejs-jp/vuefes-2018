import { mount } from '@vue/test-utils'
import TheSpeakerSection from '~/components/TheSpeakerSection'

describe('TheSpeakerSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheSpeakerSection)
    expect(wrapper.text()).to.contain('Speaker')
  })
})
