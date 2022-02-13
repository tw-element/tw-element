import { computed } from 'vue'
import useMenuColor from './use-menu-color'

import type { MenuProps } from './menu'

export const useMenuCssVar = (props: MenuProps) => {
  return computed(() => {
    return {
      '--tw-menu-text-color': props.textColor || '',
      '--tw-menu-hover-text-color': props.textColor || '',
      '--tw-menu-bg-color': props.backgroundColor || '',
      '--tw-menu-hover-bg-color': useMenuColor(props).value || '',
      '--tw-menu-active-color': props.activeTextColor || '',
    }
  })
}
