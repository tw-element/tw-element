<template>
  <main :class="ns.b()">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@tw-element/hooks'

export default defineComponent({
  name: 'TwMain',
  setup() {
    const ns = useNamespace('main')

    return {
      ns,
    }
  },
})
</script>
