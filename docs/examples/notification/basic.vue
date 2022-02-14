<template>
  <tw-button plain @click="open1"> Closes automatically </tw-button>
  <tw-button plain @click="open2"> Won't close automatically </tw-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TwNotification } from 'element-plus'

const open1 = () => {
  TwNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  TwNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
