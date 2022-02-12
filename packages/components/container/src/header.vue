<template>
  <header :class="ns.b()" :style="style">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@tw-element/hooks'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'TwHeader',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const ns = useNamespace('header')

    return {
      style: computed(
        () =>
          (props.height
            ? {
                '--el-header-height': props.height,
              }
            : {}) as CSSProperties
      ),
      ns,
    }
  },
})
</script>
