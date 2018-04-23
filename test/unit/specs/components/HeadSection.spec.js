import { mount } from '@vue/test-utils'
import HeadSection from '~/components/HeadSection'

describe('HeadSection', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(HeadSection)
    expect(wrapper.text()).to.contain('Vue.js カンファレンス')
  })
})
