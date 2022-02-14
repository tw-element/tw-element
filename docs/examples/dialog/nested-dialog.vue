<template>
  <tw-button type="text" @click="outerVisible = true"
    >open the outer Dialog</tw-button
  >

  <el-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <el-dialog
        v-model="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body
      >
      </el-dialog>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <tw-button @click="outerVisible = false">Cancel</tw-button>
        <tw-button type="primary" @click="innerVisible = true"
          >open the inner Dialog</tw-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
