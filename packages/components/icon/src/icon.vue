<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { isUndefined, addUnit } from '@tw-element/utils'
import { useNamespace } from '@tw-element/hooks'
import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'TwIcon',
  inheritAttrs: false,

  props: iconProps,

  setup(props) {
    const ns = useNamespace('icon')

    const style = computed<CSSProperties>(() => {
      if (!props.size && !props.color) return {}

      return {
        fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
        '--color': props.color,
      }
    })

    return {
      ns,
      style,
    }
  },
})
</script>
