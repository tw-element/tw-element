import { buildProps } from '@tw-element/utils'

import type { ExtractPropTypes } from 'vue'

export const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ['success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light',
  },
} as const)
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type TagEmits = typeof tagEmits
