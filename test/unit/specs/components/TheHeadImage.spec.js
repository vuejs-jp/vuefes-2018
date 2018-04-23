import { mount } from '@vue/test-utils'
import TheHeadImage from '~/components/TheHeadImage'

describe('TheHeadImage', () => {
  it('レンダリングできる', () => {
    const wrapper = mount(TheHeadImage)
    expect(wrapper.classes()).to.contain('the-head-image')
  })
})
