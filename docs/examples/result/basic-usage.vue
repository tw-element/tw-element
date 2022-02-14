<template>
  <tw-row>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <tw-button type="primary">Back</tw-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <tw-button type="primary">Back</tw-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <tw-button type="primary">Back</tw-button>
        </template>
      </el-result>
    </el-col>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="info"
        title="Info Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <tw-button type="primary">Back</tw-button>
        </template>
      </el-result>
    </el-col>
  </tw-row>
</template>
