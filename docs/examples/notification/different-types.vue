<template>
  <tw-button plain @click="open1"> Success </tw-button>
  <tw-button plain @click="open2"> Warning </tw-button>
  <tw-button plain @click="open3"> Info </tw-button>
  <tw-button plain @click="open4"> Error </tw-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'element-plus'

const open1 = () => {
  TwNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  TwNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  TwNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  TwNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
