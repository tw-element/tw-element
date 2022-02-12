<template>
  <el-button plain @click="open"> Hide close button </el-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'element-plus'

const open = () => {
  TwNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
