<template>
  <tw-button plain @click="open"> Hide close button </tw-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'tw-element'

const open = () => {
  TwNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
