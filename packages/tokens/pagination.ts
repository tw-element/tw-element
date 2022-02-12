import type { InjectionKey, ComputedRef, WritableComputedRef } from 'vue'

export interface TwPaginationContext {
  currentPage?: WritableComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: (val: number) => void
  handleSizeChange?: (val: number) => void
}

export const TwPaginationKey: InjectionKey<TwPaginationContext> =
  Symbol('twPaginationKey')
