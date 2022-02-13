<template>
  <aside :class="ns.b()" :style="style">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@tw-element/hooks'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'TwAside',
  props: {
    width: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const ns = useNamespace('aside')

    return {
      style: computed(() => {
        return props.width
          ? ({ '--tw-aside-width': props.width } as CSSProperties)
          : {}
      }),
      ns,
    }
  },
})
</script>
