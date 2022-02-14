<template>
  <div class="flex">
    <tw-button type="primary" :icon="Edit"></tw-button>
    <tw-button type="primary" :icon="Share"></tw-button>
    <tw-button type="primary" :icon="Delete"></tw-button>
    <tw-button type="primary" :icon="Search">Search</tw-button>
    <tw-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </tw-button>
  </div>
</template>
<script setup lang="ts">
import { Edit, Share, Delete, Search, Upload } from '@element-plus/icons-vue'
</script>

<style>
:root {
  --tw-color-primary: #409eff;
}
</style>
