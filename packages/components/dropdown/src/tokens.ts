import type { InjectionKey, Ref } from 'vue'

export type TwDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | null>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<TwDropdownInjectionContext> =
  Symbol('TwDropdown')
