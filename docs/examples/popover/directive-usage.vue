<template>
  <tw-button v-popover="popoverRef" v-click-outside="onClickOutside"
    >Click me</tw-button
  >

  <tw-popover
    ref="popoverRef"
    trigger="click"
    title="With title"
    virtual-triggering
    persistent
  >
    <span> Some content </span>
  </tw-popover>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue'
import { ClickOutside as vClickOutside } from 'tw-element'
const buttonRef = ref()
const popoverRef = ref()
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>
