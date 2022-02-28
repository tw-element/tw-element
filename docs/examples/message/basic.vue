<template>
  <tw-button :plain="true" @click="open">Show message</tw-button>
  <tw-button :plain="true" @click="openVn">VNode</tw-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TwMessage } from 'tw-element'

const open = () => {
  TwMessage('this is a message.')
}
const openVn = () => {
  TwMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
