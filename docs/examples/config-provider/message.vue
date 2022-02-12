<template>
  <div>
    <el-config-provider :message="config">
      <el-button @click="open">open</el-button>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { TwMessage } from 'element-plus'
const config = reactive({
  max: 3,
})
const open = () => {
  TwMessage('this is a message.')
}
</script>
