import { nextTick, h, inject } from 'vue'
import { mount } from '@vue/test-utils'
import TwPopper from '../src/popper.vue'
import { POPPER_INJECTION_KEY } from '../src/tokens'

const AXIOM = 'rem is the best girl'

const TestChild = {
  template: `<div ref="contentRef">${AXIOM}</div>`,

  setup() {
    const { contentRef } = inject(POPPER_INJECTION_KEY, undefined)!

    return {
      contentRef,
    }
  },
}

describe('<TwPopper />', () => {
  const mountPopper = () => {
    return mount(TwPopper, {
      slots: {
        default: () => h(TestChild),
      },
    })
  }

  it('should be able to provide instance to its children', async () => {
    const wrapper = mountPopper()

    await nextTick()

    expect(wrapper.vm.contentRef).not.toBe(null)
    expect(wrapper.vm.contentRef.innerHTML).toBe(AXIOM)
  })
})
