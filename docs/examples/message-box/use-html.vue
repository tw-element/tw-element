<template>
  <tw-button type="text" @click="open">Click to open Message Box</tw-button>
</template>

<script lang="ts" setup>
import { TwMessageBox } from 'tw-element'

const open = () => {
  TwMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
