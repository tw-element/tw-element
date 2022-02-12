<template>
  <el-button plain @click="openCenter">Centered text</el-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'element-plus'

const openCenter = () => {
  TwMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
