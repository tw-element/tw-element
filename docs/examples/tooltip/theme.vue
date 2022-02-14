<template>
  <el-tooltip content="Top center" placement="top">
    <tw-button>Dark</tw-button>
  </el-tooltip>
  <el-tooltip content="Bottom center" placement="bottom" effect="light">
    <tw-button>Light</tw-button>
  </el-tooltip>

  <el-tooltip content="Bottom center" effect="customized">
    <tw-button>Customized theme</tw-button>
  </el-tooltip>
</template>

<style>
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
