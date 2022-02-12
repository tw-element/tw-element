import { unref } from 'vue'
import { buildProps } from '@tw-element/utils'
import { useTimeout } from '../use-timeout'

import type { ToRefs, ExtractPropTypes } from 'vue'

export const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
} as const)

export type UseDelayedToggleProps = {
  open: () => void
  close: () => void
} & ToRefs<ExtractPropTypes<typeof useDelayedToggleProps>>

export const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close,
}: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout()

  const onOpen = () => {
    registerTimeout(() => {
      open()
    }, unref(showAfter))
  }

  const onClose = () => {
    registerTimeout(() => {
      close()
    }, unref(hideAfter))
  }

  return {
    onOpen,
    onClose,
  }
}
