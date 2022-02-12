<template>
  <el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TwMessage } from 'element-plus'

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
