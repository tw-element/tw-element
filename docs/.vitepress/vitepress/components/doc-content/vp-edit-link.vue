<script setup lang="ts">
import { useEditLink } from '../../composables/edit-link'

const { url, text } = useEditLink()
</script>

<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link text-sm"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ text }}
      <TwIcon :size="16" style="vertical-align: text-top; line-height: 24px">
        <i-ri-external-link-line />
      </TwIcon>
    </a>
  </div>
</template>

<style scoped>
.link {
  display: inline-block;
  font-weight: 500;
  color: var(--text-color-light);
}

.link:hover {
  text-decoration: none;
  color: var(--brand-color);
}
</style>
