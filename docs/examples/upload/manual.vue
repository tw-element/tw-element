<template>
  <el-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="false"
  >
    <template #trigger>
      <tw-button type="primary">select file</tw-button>
    </template>
    <tw-button class="ml-3" type="success" @click="submitUpload"
      >upload to server</tw-button
    >
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TwUpload } from 'tw-element'

const uploadRef = ref<InstanceType<typeof TwUpload>>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
