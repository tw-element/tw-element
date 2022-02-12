import { componentSizes, datePickTypes } from '@tw-element/constants'
import type { ComponentSize, DatePickType } from '@tw-element/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidDatePickType = (val: string): val is DatePickType =>
  ([...datePickTypes] as string[]).includes(val)
