import { buildProps } from '@tw-element/utils'
import { radioPropsBase } from './radio'
import type { ExtractPropTypes } from 'vue'

export const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: '',
  },
} as const)

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
