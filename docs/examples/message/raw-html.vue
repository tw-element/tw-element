<template>
  <tw-button :plain="true" @click="openHTML">Use HTML String</tw-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'tw-element'

const openHTML = () => {
  TwMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
