<script lang="ts" setup>
import ToggleButton from '../icons/toggle-button.vue'
</script>

<template>
  <div class="sidebar-button">
    <TwIcon :size="24">
      <ToggleButton />
    </TwIcon>
  </div>
</template>

<style>
.sidebar-button {
  cursor: pointer;
  color: var(--text-color);
  display: flex;
  align-items: center;
}

.sidebar-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

/* @media screen and (max-width: 1044px) {
  .sidebar-button {
    display: block;
  }
} */
</style>
