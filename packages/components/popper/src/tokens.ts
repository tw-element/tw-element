import type { InjectionKey, Ref } from 'vue'
import type { Instance } from '@popperjs/core'
import type { Measurable } from './popper'

export type TwPopperInjectionContext = {
  triggerRef: Ref<Measurable | null>
  contentRef: Ref<HTMLElement | null>
  popperInstanceRef: Ref<Instance | null>
}

export type TwPopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | null>
  arrowOffset: Ref<number | undefined>
}

export const POPPER_INJECTION_KEY: InjectionKey<TwPopperInjectionContext> =
  Symbol('TwPopper')

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<TwPopperContentInjectionContext> =
  Symbol('TwPopperContent')
