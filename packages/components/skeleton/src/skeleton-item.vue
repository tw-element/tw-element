<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNamespace } from '@tw-element/hooks'
import ImgPlaceholder from './image-placeholder.vue'
import { skeletonItemProps } from './skeleton-item'

export default defineComponent({
  name: 'TwSkeletonItem',
  components: {
    ImgPlaceholder,
  },
  props: skeletonItemProps,
  setup() {
    const ns = useNamespace('skeleton')
    return {
      ns,
    }
  },
})
</script>
