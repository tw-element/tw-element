<script setup lang="ts">
import { computed, ref } from 'vue'
import { hyphenate } from '@vue/shared'
import clipboardCopy from 'clipboard-copy'
import { TwMessage } from 'tw-element'
import * as Icons from '@element-plus/icons-vue'
import { useLang } from '../../composables/lang'
import localeData from '../../../i18n/component/icons.json'

const lang = useLang()
const locale = computed(() => localeData[lang.value])
const copyIcon = ref(true)

const copyContent = async (content) => {
  try {
    await clipboardCopy(content)

    TwMessage({
      showClose: true,
      message: locale.value['copy-success'],
      type: 'success',
    })
  } catch (e) {
    TwMessage({
      showClose: true,
      message: locale.value['copy-error'],
      type: 'error',
    })
  }
}

const copySvgIcon = async (name, refs) => {
  if (copyIcon.value) {
    await copyContent(`<tw-icon><${hyphenate(name)} /></tw-icon>`)
  } else {
    const content = refs[name]?.[0].querySelector('svg')?.outerHTML ?? ''
    await copyContent(content)
  }
}
</script>

<template>
  <div style="text-align: right">
    <tw-switch
      v-model="copyIcon"
      active-text="Copy icon code"
      inactive-text="Copy SVG content"
    >
    </tw-switch>
  </div>
  <ul class="demo-icon-list">
    <li
      v-for="component in Icons"
      :key="component.name"
      :ref="component.name"
      class="icon-item"
      @click="copySvgIcon(component.name, $refs)"
    >
      <span class="demo-svg-icon">
        <TwIcon :size="20">
          <component :is="component" />
        </TwIcon>
        <span class="icon-name">{{ component.name }}</span>
      </span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid var(--tw-border-color-base);
  border-left: 1px solid var(--tw-border-color-base);
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  .icon-item {
    text-align: center;
    color: var(--tw-text-color-regular);
    height: 90px;
    font-size: 13px;
    border-right: 1px solid var(--tw-border-color-base);
    border-bottom: 1px solid var(--tw-border-color-base);
    transition: background-color var(--tw-transition-duration);
    &:hover {
      background-color: var(--tw-border-color-extra-light);
      .tw-icon {
        color: var(--brand-color-light);
      }
      color: var(--brand-color-light);
    }

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;

      .icon-name {
        margin-top: 8px;
      }
    }
  }
}
</style>
