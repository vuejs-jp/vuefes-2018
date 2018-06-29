import { mount } from '@vue/test-utils'
import TheHeadSection from '~/components/TheHeadSection'

describe('TheHeadSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheHeadSection)
    expect(wrapper.text()).to.contain('Vue.js カンファレンス')
  })
})
