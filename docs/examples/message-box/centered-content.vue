<template>
  <tw-button type="text" @click="open">Click to open Message Box</tw-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'tw-element'

const open = () => {
  TwMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancTwButtonText: 'Cancel',
      type: 'warning',
      center: true,
    }
  )
    .then(() => {
      TwMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      TwMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
