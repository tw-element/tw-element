<template>
  <tw-button type="text" @click="open">Click to open Message Box</tw-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'tw-element'

const open = () => {
  TwMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancTwButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      TwMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      TwMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
