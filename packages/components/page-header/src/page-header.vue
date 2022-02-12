<template>
  <div :class="ns.b()">
    <div :class="ns.e('left')" @click="handleClick">
      <div v-if="icon || $slots.icon" :class="ns.e('icon')">
        <slot name="icon">
          <el-icon v-if="icon"><component :is="icon" /></el-icon>
        </slot>
      </div>
      <div :class="ns.e('title')">
        <slot name="title">{{ title || t('el.pageHeader.title') }}</slot>
      </div>
    </div>
    <div :class="ns.e('content')">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { TwIcon } from '@tw-element/components/icon'

import { useLocale, useNamespace } from '@tw-element/hooks'
import { pageHeaderEmits, pageHeaderProps } from './page-header'

export default defineComponent({
  name: 'TwPageHeader',

  components: {
    TwIcon,
  },

  props: pageHeaderProps,
  emits: pageHeaderEmits,

  setup(_, { emit }) {
    const { t } = useLocale()
    const ns = useNamespace('page-header')

    function handleClick() {
      emit('back')
    }

    return {
      handleClick,
      t,
      ns,
    }
  },
})
</script>
