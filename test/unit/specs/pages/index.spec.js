import { mount } from '@vue/test-utils'
import WelcomePage from '~/pages/index'

describe('WelcomePage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(WelcomePage)
    expect(wrapper.text()).to.contain('Vue.js カンファレンス')
  })
})
