import { mount } from '@vue/test-utils'
import TeamSection from '~/components/TeamSection'

describe('TeamSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TeamSection)
    expect(wrapper.text()).to.contain('About us')
  })
})
