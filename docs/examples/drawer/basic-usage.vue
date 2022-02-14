<template>
  <el-radio-group v-model="direction">
    <el-radio label="ltr">left to right</el-radio>
    <el-radio label="rtl">right to left</el-radio>
    <el-radio label="ttb">top to bottom</el-radio>
    <el-radio label="btt">bottom to top</el-radio>
  </el-radio-group>

  <tw-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </tw-button>
  <tw-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </tw-button>

  <el-drawer
    v-model="drawer"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
  <el-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <el-radio v-model="radio1" label="Option 1" size="large"
          >Option 1</el-radio
        >
        <el-radio v-model="radio1" label="Option 2" size="large"
          >Option 2</el-radio
        >
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <tw-button @click="cancelClick">cancel</tw-button>
        <tw-button type="primary" @click="confirmClick">confirm</tw-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TwMessageBox } from 'element-plus'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  TwMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  TwMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
