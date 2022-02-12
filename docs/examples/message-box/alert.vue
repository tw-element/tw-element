<template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'element-plus'
import type { Action } from 'element-plus'

const open = () => {
  TwMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      TwMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>
