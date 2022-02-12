<template>
  <li class="el-menu-item-group">
    <div
      class="el-menu-item-group__title"
      :style="{ paddingLeft: `${levelPadding}px` }"
    >
      <template v-if="!$slots.title">{{ title }}</template>
      <slot v-else name="title" />
    </div>
    <ul>
      <slot />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance, inject } from 'vue'
import { throwError } from '@tw-element/utils'
import { menuItemGroupProps } from './menu-item-group'

import type { MenuProvider } from './types'

const COMPONENT_NAME = 'TwMenuItemGroup'

export default defineComponent({
  name: COMPONENT_NAME,

  props: menuItemGroupProps,

  setup() {
    const instance = getCurrentInstance()!
    const menu = inject<MenuProvider>('rootMenu')
    if (!menu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const levelPadding = computed(() => {
      if (menu.props.collapse) return 20
      let padding = 20
      let parent = instance.parent
      while (parent && parent.type.name !== 'TwMenu') {
        if (parent.type.name === 'TwSubMenu') {
          padding += 20
        }
        parent = parent.parent
      }
      return padding
    })

    return {
      levelPadding,
    }
  },
})
</script>
