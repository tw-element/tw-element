<template>
  <tw-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </tw-button>

  <el-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <tw-button @click="innerDrawer = true">Click me!</tw-button>
      <el-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwMessageBox } from 'element-plus'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  TwMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
