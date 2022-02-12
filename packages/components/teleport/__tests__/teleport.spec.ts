import { mount } from '@vue/test-utils'
import Teleport from '../src/teleport.vue'

const AXIOM = 'rem is the best girl'

describe('<el-teleport />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Teleport, {
      slots: { default: () => AXIOM },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render slot correctly', () => {
    expect(wrapper.text()).toBe('')
    expect(document.body.textContent).toBe(AXIOM)
    expect(wrapper.vm.containerRef).toBeDefined()
  })

  describe('props', () => {
    it('should be able to set customized style', async () => {
      const style = {
        color: 'red',
      }

      await wrapper.setProps({ style })
      expect(getComputedStyle(wrapper.vm?.containerRef).color).toBe(style.color)
    })

    it('should be able to set z-index', async () => {
      const zIndex = '10000'
      await wrapper.setProps({ zIndex })
      expect(getComputedStyle(wrapper.vm?.containerRef).zIndex).toBe(zIndex)
    })
  })
})
