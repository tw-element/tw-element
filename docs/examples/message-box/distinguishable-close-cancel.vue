<template>
  <tw-button type="text" @click="open">Click to open Message Box</tw-button>
</template>

<script lang="ts" setup>
import { TwMessageBox, TwMessage } from 'element-plus'
import type { Action } from 'element-plus'
const open = () => {
  TwMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancTwButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      TwMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      TwMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
