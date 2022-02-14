<template>
  <el-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <tw-button> button {{ i }} </tw-button>
    </div>
  </el-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { TwDivider } from 'element-plus'

const size = ref(10)
const spacer = h(TwDivider, { direction: 'vertical' })
</script>
