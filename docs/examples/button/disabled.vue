<template>
  <tw-row class="mb-4">
    <tw-button disabled>Default</tw-button>
    <tw-button type="primary" disabled>Primary</tw-button>
    <tw-button type="success" disabled>Success</tw-button>
    <tw-button type="info" disabled>Info</tw-button>
    <tw-button type="warning" disabled>Warning</tw-button>
    <tw-button type="danger" disabled>Danger</tw-button>
  </tw-row>

  <tw-row>
    <tw-button plain disabled>Plain</tw-button>
    <tw-button type="primary" plain disabled>Primary</tw-button>
    <tw-button type="success" plain disabled>Success</tw-button>
    <tw-button type="info" plain disabled>Info</tw-button>
    <tw-button type="warning" plain disabled>Warning</tw-button>
    <tw-button type="danger" plain disabled>Danger</tw-button>
  </tw-row>
</template>

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
