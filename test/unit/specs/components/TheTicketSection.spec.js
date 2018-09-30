import { mount } from '@vue/test-utils'
import TheTicketSection from '~/components/TheTicketSection'

describe('TheTicketSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheTicketSection)
    expect(wrapper.text()).to.contain('TICKET')
  })
})
