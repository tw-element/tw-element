<template>
  <tw-row class="mb-4">
    <tw-button>Defaultsss</tw-button>
    <tw-button type="primary">Primaryss</tw-button>
    <tw-button type="success">Success</tw-button>
    <tw-button type="info">Info</tw-button>
    <tw-button type="warning">Warning</tw-button>
    <tw-button type="danger">Danger</tw-button>
    <tw-button>中文</tw-button>
  </tw-row>

  <tw-row class="mb-4">
    <tw-button plain>Plain</tw-button>
    <tw-button type="primary" plain>Primary</tw-button>
    <tw-button type="success" plain>Success</tw-button>
    <tw-button type="info" plain>Info</tw-button>
    <tw-button type="warning" plain>Warning</tw-button>
    <tw-button type="danger" plain>Danger</tw-button>
  </tw-row>

  <tw-row class="mb-4">
    <tw-button round>Round</tw-button>
    <tw-button type="primary" round>Primary</tw-button>
    <tw-button type="success" round>Success</tw-button>
    <tw-button type="info" round>Info</tw-button>
    <tw-button type="warning" round>Warning</tw-button>
    <tw-button type="danger" round>Danger</tw-button>
  </tw-row>

  <tw-row>
    <tw-button :icon="Search" circle></tw-button>
    <tw-button type="primary" :icon="Edit" circle></tw-button>
    <tw-button type="success" :icon="Check" circle></tw-button>
    <tw-button type="info" :icon="Message" circle></tw-button>
    <tw-button type="warning" :icon="Star" circle></tw-button>
    <tw-button type="danger" :icon="Delete" circle></tw-button>
  </tw-row>
</template>

<script lang="ts" setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
</script>

<style>
:root {
  --tw-color-primary: #409eff;
  --tw-color-success: #67c23a;
  --tw-color-warning: #e6a23c;
  --tw-color-danger: #f56c6c;
  --tw-color-error: #f56c6c;
  --tw-color-info: #909399;
}
</style>
