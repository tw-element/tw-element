<template>
  <tw-button :plain="true" @click="open">Show message</tw-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'element-plus'

const open = () => {
  TwMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
