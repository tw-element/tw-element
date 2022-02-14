<template>
  <el-tooltip v-model:visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <tw-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </tw-button>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
