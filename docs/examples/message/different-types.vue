<template>
  <el-button :plain="true" @click="open2">success</el-button>
  <el-button :plain="true" @click="open3">warning</el-button>
  <el-button :plain="true" @click="open1">message</el-button>
  <el-button :plain="true" @click="open4">error</el-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'element-plus'

const open1 = () => {
  TwMessage('this is a message.')
}
const open2 = () => {
  TwMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  TwMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  TwMessage.error('Oops, this is a error message.')
}
</script>
