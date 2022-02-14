<template>
  <el-popover v-model:visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <tw-button size="small" type="text" @click="visible = false"
        >cancel</tw-button
      >
      <tw-button size="small" type="primary" @click="visible = false"
        >confirm</tw-button
      >
    </div>
    <template #reference>
      <tw-button @click="visible = true">Delete</tw-button>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
