import { mount } from '@vue/test-utils'
import TheSpeakerListSection from '~/components/TheSpeakerListSection'

describe('TheSpeakerListSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheSpeakerListSection)
    expect(wrapper.text()).to.contain('Speakers')
  })
})
