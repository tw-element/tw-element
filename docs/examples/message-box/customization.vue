<template>
  <tw-button type="text" @click="open">Click to open Message Box</tw-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { TwMessage, TwMessageBox } from 'element-plus'
const open = () => {
  TwMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
    showCancTwButton: true,
    confirmButtonText: 'OK',
    cancTwButtonText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    },
  }).then((action) => {
    TwMessage({
      type: 'info',
      message: `action: ${action}`,
    })
  })
}
</script>
