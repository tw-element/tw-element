import { buttonType } from '@tw-element/components/button'
import { QuestionFilled } from '@tw-element/icons-vue'
import { buildProps, definePropType, iconPropType } from '@tw-element/utils'
import { useTooltipContentProps } from '@tw-element/components/tooltip'
import type { Component, ExtractPropTypes } from 'vue'

export const popconfirmProps = buildProps({
  title: {
    type: String,
  },
  confirmButtonText: {
    type: String,
  },
  cancTwButtonText: {
    type: String,
  },
  confirmButtonType: {
    type: String,
    values: buttonType,
    default: 'primary',
  },
  cancTwButtonType: {
    type: String,
    values: buttonType,
    default: 'text',
  },
  icon: {
    type: iconPropType,
    default: QuestionFilled as Component,
  },
  iconColor: {
    type: String,
    default: '#f90',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  onConfirm: {
    type: definePropType<(e: Event) => Promise<void> | void>(Function),
  },
  onCancel: {
    type: definePropType<(e: Event) => Promise<void> | void>(Function),
  },
  teleported: useTooltipContentProps.teleported,
} as const)
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>
