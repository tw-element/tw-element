<script setup lang="ts">
import DarkIcon from '../icons/dark.vue'
import LightIcon from '../icons/light.vue'
import VPSwitch from './vp-switch.vue'
</script>

<template>
  <VPSwitch>
    <TwIcon :size="13">
      <DarkIcon class="dark-icon" />
      <LightIcon class="light-icon" />
    </TwIcon>
  </VPSwitch>
</template>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}

.dark-icon,
.light-icon {
  transition: color var(--tw-transition-duration),
    opacity var(--tw-transition-duration);
}

.light-icon {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.dark-icon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

@at-root .dark {
  .dark-icon {
    opacity: 1;
  }

  .light-icon {
    opacity: 0;
  }
}
</style>
