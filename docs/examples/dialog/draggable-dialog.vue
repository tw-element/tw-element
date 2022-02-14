<template>
  <tw-button type="text" @click="dialogVisible = true"
    >Click to open Dialog
  </tw-button>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <tw-button @click="dialogVisible = false">Cancel</tw-button>
        <tw-button type="primary" @click="dialogVisible = false"
          >Confirm</tw-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
