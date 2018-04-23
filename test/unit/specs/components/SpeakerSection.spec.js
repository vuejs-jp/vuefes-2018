import { mount } from '@vue/test-utils'
import SpeakerSection from '~/components/SpeakerSection'

describe('SpeakerSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(SpeakerSection)
    expect(wrapper.text()).to.contain('Speaker')
  })
})
