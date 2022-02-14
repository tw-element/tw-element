<template>
  <tw-button type="text" @click="centerDialogVisible = true"
    >Click to open Dialog</tw-button
  >

  <el-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="30%"
    destroy-on-close
    center
  >
    <span
      >Notice: before dialog gets opened for the first time this node and the
      one bellow will not be rendered</span
    >
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <tw-button @click="centerDialogVisible = false">Cancel</tw-button>
        <tw-button type="primary" @click="centerDialogVisible = false"
          >Confirm</tw-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
