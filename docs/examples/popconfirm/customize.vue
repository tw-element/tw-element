<template>
  <el-popconfirm
    confirm-button-text="OK"
    canctw-button-text="No, Thanks"
    :icon="InfoFilled"
    icon-color="red"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <tw-button>Delete</tw-button>
    </template>
  </el-popconfirm>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
</script>
