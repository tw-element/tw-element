<template>
  <tw-button-group>
    <tw-button type="primary" :icon="ArrowLeft">Previous Page</tw-button>
    <tw-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </tw-button>
  </tw-button-group>

  <tw-button-group class="ml-4">
    <tw-button type="primary" :icon="Edit"></tw-button>
    <tw-button type="primary" :icon="Share"></tw-button>
    <tw-button type="primary" :icon="Delete"></tw-button>
  </tw-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  Edit,
  Share,
  Delete,
  ArrowRight,
} from '@element-plus/icons-vue'
</script>

<style>
:root {
  --tw-color-primary: #409eff;
  --tw-color-success: #67c23a;
  --tw-color-warning: #e6a23c;
  --tw-color-danger: #f56c6c;
  --tw-color-error: #f56c6c;
  --tw-color-info: #909399;
}
</style>
