<template>
  <el-button plain @click="open"> Notification with offset </el-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'element-plus'

const open = () => {
  TwNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
