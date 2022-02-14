<template>
  <el-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <tw-button-group>
        <tw-button size="small" @click="selectDate('prev-year')"
          >Previous Year</tw-button
        >
        <tw-button size="small" @click="selectDate('prev-month')"
          >Previous Month</tw-button
        >
        <tw-button size="small" @click="selectDate('today')">Today</tw-button>
        <tw-button size="small" @click="selectDate('next-month')"
          >Next Month</tw-button
        >
        <tw-button size="small" @click="selectDate('next-year')"
          >Next Year</tw-button
        >
      </tw-button-group>
    </template>
  </el-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const calendar = ref()
const selectDate = (val: string) => {
  calendar.value.selectDate(val)
}
</script>
