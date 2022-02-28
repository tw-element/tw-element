<template>
  <tw-button :plain="true" @click="open2">success</tw-button>
  <tw-button :plain="true" @click="open3">warning</tw-button>
  <tw-button :plain="true" @click="open1">message</tw-button>
  <tw-button :plain="true" @click="open4">error</tw-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'tw-element'

const open1 = () => {
  TwMessage('this is a message.')
}
const open2 = () => {
  TwMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  TwMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  TwMessage.error('Oops, this is a error message.')
}
</script>
