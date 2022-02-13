<template>
  <div :class="[ns.b(), ns.m(direction)]" :style="dividerStyle">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="[ns.e('text'), ns.is(contentPosition)]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useNamespace } from '@tw-element/hooks'

import { dividerProps } from './divider'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'TwDivider',
  props: dividerProps,

  setup(props) {
    const ns = useNamespace('divider')

    const dividerStyle = computed(() => {
      return {
        '--tw-border-style': props.borderStyle,
      } as CSSProperties
    })

    return {
      ns,
      dividerStyle,
    }
  },
})
</script>
