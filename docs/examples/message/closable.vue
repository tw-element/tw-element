<template>
  <tw-button :plain="true" @click="open1">message</tw-button>
  <tw-button :plain="true" @click="open2">success</tw-button>
  <tw-button :plain="true" @click="open3">warning</tw-button>
  <tw-button :plain="true" @click="open4">error</tw-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'tw-element'

const open1 = () => {
  TwMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  TwMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  TwMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  TwMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
</script>
