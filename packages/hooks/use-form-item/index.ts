import { inject } from 'vue'
import { twFormKey, twFormItemKey } from '@tw-element/tokens'

export const useFormItem = () => {
  const form = inject(twFormKey, undefined)
  const formItem = inject(twFormItemKey, undefined)
  return {
    form,
    formItem,
  }
}
