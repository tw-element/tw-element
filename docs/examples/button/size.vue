<template>
  <tw-row>
    <tw-button size="large">Large</tw-button>
    <tw-button>Default</tw-button>
    <tw-button size="small">Small</tw-button>
    <tw-button size="large" :icon="Search">Search</tw-button>
    <tw-button :icon="Search">Search</tw-button>
    <tw-button size="small" :icon="Search">Search</tw-button>
  </tw-row>
  <tw-row class="my-4">
    <tw-button size="large" round>Large</tw-button>
    <tw-button round>Default</tw-button>
    <tw-button size="small" round>Small</tw-button>
    <tw-button size="large" :icon="Search" round>Search</tw-button>
    <tw-button :icon="Search" round>Search</tw-button>
    <tw-button size="small" :icon="Search" round>Search</tw-button>
  </tw-row>
  <tw-row>
    <tw-button :icon="Search" size="large" circle></tw-button>
    <tw-button :icon="Search" circle></tw-button>
    <tw-button :icon="Search" size="small" circle></tw-button>
  </tw-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
