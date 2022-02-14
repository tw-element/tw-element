<template>
  <el-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <tw-button> button {{ i }} </tw-button>
    </div>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
