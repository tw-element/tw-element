<template>
  <tw-button type="text" @click="open">Click to open the Message Box</tw-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'tw-element'
import type { Action } from 'tw-element'

const open = () => {
  TwMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      TwMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
