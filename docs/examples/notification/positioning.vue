<template>
  <tw-button plain @click="open1"> Top Right </tw-button>
  <tw-button plain @click="open2"> Bottom Right </tw-button>
  <tw-button plain @click="open3"> Bottom Left </tw-button>
  <tw-button plain @click="open4"> Top Left </tw-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'tw-element'

const open1 = () => {
  TwNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  TwNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  TwNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  TwNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
