import { computed, inject } from 'vue'
import { throwError } from '@tw-element/utils'

import type { ComponentInternalInstance, Ref, CSSProperties } from 'vue'
import type { MenuProvider } from './types'

export default function useMenu(
  instance: ComponentInternalInstance,
  currentIndex: Ref<string>
) {
  const rootMenu = inject<MenuProvider>('rootMenu')
  if (!rootMenu) throwError('useMenu', 'can not inject root menu')

  const indexPath = computed(() => {
    let parent = instance.parent!
    const path = [currentIndex.value]
    while (parent.type.name !== 'TwMenu') {
      if (parent.props.index) {
        path.unshift(parent.props.index as string)
      }
      parent = parent.parent!
    }
    return path
  })

  const parentMenu = computed(() => {
    let parent = instance.parent
    while (parent && !['TwMenu', 'TwSubMenu'].includes(parent.type.name!)) {
      parent = parent.parent
    }
    return parent!
  })
  const paddingStyle = computed<CSSProperties>(() => {
    let parent = instance.parent
    if (rootMenu.props.mode !== 'vertical') return {}

    let padding = 20

    if (rootMenu.props.collapse) {
      padding = 20
    } else {
      while (parent && parent.type.name !== 'TwMenu') {
        if (parent.type.name === 'TwSubMenu') {
          padding += 20
        }
        parent = parent.parent
      }
    }
    return { paddingLeft: `${padding}px` }
  })

  return {
    parentMenu,
    paddingStyle,
    indexPath,
  }
}
