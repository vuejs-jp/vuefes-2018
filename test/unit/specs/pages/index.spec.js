import { mount } from '@vue/test-utils'
import index from '~/pages/index'

describe('code-of-conduct', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(index)
    expect(wrapper.text()).to.contain('Vue.js カンファレンス')
  })
})
