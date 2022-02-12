import { ref, unref, inject, computed } from 'vue'
import { twFormItemKey, twFormKey } from '@tw-element/tokens'
import { buildProp } from '@tw-element/utils'
import { componentSizes } from '@tw-element/constants'
import { useProp } from '../use-prop'
import { useGlobalConfig } from '../use-global-config'
import type { ComponentSize } from '@tw-element/constants'
import type { MaybeRef } from '@vueuse/core'

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const)

export const useSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>> = {}
) => {
  const emptyRef = ref(undefined)

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig('size')
  const form = ignore.form ? { size: undefined } : inject(twFormKey, undefined)
  const formItem = ignore.formItem
    ? { size: undefined }
    : inject(twFormItemKey, undefined)

  return computed(
    (): ComponentSize =>
      size.value ||
      unref(fallback) ||
      formItem?.size ||
      form?.size ||
      globalConfig.value ||
      'default'
  )
}

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  const form = inject(twFormKey, undefined)
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false
  )
}
