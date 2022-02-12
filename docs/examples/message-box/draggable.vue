<template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'element-plus'

const open = () => {
  TwMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancTwButtonText: 'Cancel',
      type: 'warning',
      draggable: true,
    }
  )
    .then(() => {
      TwMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      TwMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
