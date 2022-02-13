<template>
  <footer :class="ns.b()" :style="style">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@tw-element/hooks'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'TwFooter',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const ns = useNamespace('footer')

    return {
      style: computed(
        () =>
          (props.height
            ? {
                '--tw-footer-height': props.height,
              }
            : {}) as CSSProperties
      ),
      ns,
    }
  },
})
</script>
