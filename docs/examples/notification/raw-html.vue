<template>
  <tw-button plain @click="open"> Use HTML String </tw-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'tw-element'

const open = () => {
  TwNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
