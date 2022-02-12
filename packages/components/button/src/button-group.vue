<template>
  <div :class="`${ns.b('group')}`">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRef } from 'vue'
import { buttonGroupContextKey } from '@tw-element/tokens'
import { useNamespace } from '@tw-element/hooks'
import { buttonGroupProps } from './button-group'

export default defineComponent({
  name: 'TwButtonGroup',
  props: buttonGroupProps,

  setup(props) {
    provide(
      buttonGroupContextKey,
      reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
      })
    )
    const ns = useNamespace('button')
    return {
      ns,
    }
  },
})
</script>
