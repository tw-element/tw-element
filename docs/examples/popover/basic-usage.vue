<template>
  <tw-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tw-button>Hover to activate</tw-button>
    </template>
  </tw-popover>

  <tw-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tw-button>Click to activate</tw-button>
    </template>
  </tw-popover>

  <tw-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tw-button>Focus to activate</tw-button>
    </template>
  </tw-popover>

  <tw-popover
    v-model:visible="visible"
    placement="bottom"
    title="Title"
    :width="200"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <tw-button @click="visible = !visible">Manual to activate</tw-button>
    </template>
  </tw-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
