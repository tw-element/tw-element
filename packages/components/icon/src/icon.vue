<template>
  <i :class="[load, color, style]" v-bind="$attrs" class="tw-icon">
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
    // const style = computed<CSSProperties>(() => {
    //   if (!props.size && !props.color) return {}

    //   return {
    //     fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    //     '--color': props.color,
    //   }
    // })

    const style = computed(() => {
      if (!props.class) return {}
      return props.class
    })

    const load = computed(() => {
      if (props.loading) {
        return 'is-loading'
      }
      return {}
    })

    const color = computed(() => {
      if (props.color) {
        return props.color
      }
      return {}
    })

    return {
      style,
      load,
      color,
    }
  },
})
</script>
