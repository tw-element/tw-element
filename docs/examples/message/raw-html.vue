<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script lang="ts" setup>
import { TwMessage } from 'element-plus'

const openHTML = () => {
  TwMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
