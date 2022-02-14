<template>
  <tw-button plain @click="openCenter">Centered text</tw-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'element-plus'

const openCenter = () => {
  TwMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
