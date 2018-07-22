import { mount } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter'

describe('TheFooter', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheFooter)
    expect(
      wrapper.find('.link-list').text()
    ).to.contain('Vue.js')
  })
})