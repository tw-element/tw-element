<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './tokens'

import type { TwPopperInjectionContext } from './tokens'

export default defineComponent({
  name: 'TwPopperProvider',
  inheritAttrs: false,
  setup() {
    const popperProvides = {
      triggerRef: ref<HTMLElement | null>(null),
      popperInstanceRef: ref(null),
      contentRef: ref(null),
    } as TwPopperInjectionContext

    provide(POPPER_INJECTION_KEY, popperProvides)

    return popperProvides
  },
})
</script>
