<template>
  <el-button plain @click="open1"> Success </el-button>
  <el-button plain @click="open2"> Warning </el-button>
  <el-button plain @click="open3"> Info </el-button>
  <el-button plain @click="open4"> Error </el-button>
</template>

<script lang="ts" setup>
import { TwNotification } from 'element-plus'

const open1 = () => {
  TwNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  TwNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  TwNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  TwNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
