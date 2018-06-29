import { mount } from '@vue/test-utils'
import TheTeamSection from '~/components/TheTeamSection'

describe('TheTeamSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheTeamSection)
    expect(wrapper.text()).to.contain('About us')
  })
})
