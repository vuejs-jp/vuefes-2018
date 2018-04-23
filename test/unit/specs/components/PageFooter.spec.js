import { mount } from '@vue/test-utils'
import PageFooter from '~/components/PageFooter'

describe('PageFooter', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(PageFooter)
    expect(
      wrapper.find('.link-list').text()
    ).to.contain('Vue.js')
  })
})
