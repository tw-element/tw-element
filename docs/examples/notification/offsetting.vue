<template>
  <tw-button plain @click="open"> Notification with offset </tw-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'tw-element'

const open = () => {
  TwNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
