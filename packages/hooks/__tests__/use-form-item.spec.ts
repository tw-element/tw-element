import { h, provide } from 'vue'
import { NOOP } from '@vue/shared'
import { mount } from '@vue/test-utils'
import { TwButton } from '@tw-element/components'
import {
  twFormKey,
  twFormItemKey,
  buttonGroupContextKey,
} from '@tw-element/tokens'

import type {
  TwFormContext,
  TwFormItemContext,
  ButtonGroupContext,
} from '@tw-element/tokens'

const AXIOM = 'Rem is the best girl'

const Component = {
  render() {
    return h(TwButton, this.$attrs, {
      default: () => [AXIOM],
    })
  },
}

const mountComponent = (setup = NOOP, options = {}) => {
  return mount(
    {
      ...Component,
      setup,
    },
    options
  )
}

const getButtonVm = (wrapper: ReturnType<typeof mountComponent>) => {
  return wrapper.findComponent(TwButton).vm as any as {
    buttonSize: string
    buttonDisabled: boolean
  }
}

describe('use-form-item', () => {
  it('should return local value', () => {
    const wrapper = mountComponent()
    expect(getButtonVm(wrapper).buttonSize).toBe('default')
  })

  it('should return props.size instead of injected.size', () => {
    const propSize = 'small'
    const wrapper = mountComponent(
      () => {
        provide(twFormItemKey, {
          size: 'large',
        } as TwFormItemContext)
      },
      {
        props: {
          size: propSize,
        },
      }
    )

    expect(getButtonVm(wrapper).buttonSize).toBe(propSize)
  })

  it('should return fallback.size instead inject.size', () => {
    const fallbackSize = 'small'
    const wrapper = mountComponent(() => {
      provide(buttonGroupContextKey, {
        size: fallbackSize,
      } as ButtonGroupContext)

      provide(twFormItemKey, {
        size: 'large',
      } as TwFormItemContext)
    })

    expect(getButtonVm(wrapper).buttonSize).toBe(fallbackSize)
  })

  it('should return formItem.size instead form.size', () => {
    const itemSize = 'small'
    const wrapper = mountComponent(() => {
      provide(twFormItemKey, {
        size: itemSize,
      } as TwFormItemContext)

      provide(twFormKey, {
        size: 'large',
      } as TwFormContext)
    })

    expect(getButtonVm(wrapper).buttonSize).toBe(itemSize)
  })
})
