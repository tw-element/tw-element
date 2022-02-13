<template>
  <button
    ref="buttonRef"
    :class="[
      ns.b(),
      ns.m(buttonType),
      ns.m(buttonSize),
      ns.is('disabled', buttonDisabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :style="buttonStyle"
    @click="handleClick"
  >
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <el-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </el-icon>
    </template>
    <el-icon v-else-if="icon">
      <component :is="icon" />
    </el-icon>
    <span
      v-if="$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, inject, defineComponent, Text, ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import { TinyColor } from '@ctrl/tinycolor'
import { TwIcon } from '@tw-element/components/icon'
import {
  useDisabled,
  useFormItem,
  useGlobalConfig,
  useNamespace,
  useSize,
} from '@tw-element/hooks'
import { buttonGroupContextKey } from '@tw-element/tokens'
import { Loading } from '@element-plus/icons-vue'

import { buttonEmits, buttonProps } from './button'

export default defineComponent({
  name: 'TwButton',

  components: {
    TwIcon,
    Loading,
  },

  props: buttonProps,
  emits: buttonEmits,

  setup(props, { emit, slots }) {
    const buttonRef = ref()
    const buttonGroupContext = inject(buttonGroupContextKey, undefined)
    const globalConfig = useGlobalConfig('button')
    const ns = useNamespace('button')
    const autoInsertSpace = computed(
      () =>
        props.autoInsertSpace ?? globalConfig.value?.autoInsertSpace ?? false
    )

    // add space between two characters in Chinese
    const shouldAddSpace = computed(() => {
      const defaultSlot = slots.default?.()
      if (autoInsertSpace.value && defaultSlot?.length === 1) {
        const slot = defaultSlot[0]
        if (slot?.type === Text) {
          const text = slot.children
          return /^\p{Unified_Ideograph}{2}$/u.test(text as string)
        }
      }
      return false
    })

    const { form } = useFormItem()
    const buttonSize = useSize(computed(() => buttonGroupContext?.size))
    const buttonDisabled = useDisabled()
    const buttonType = computed(
      () => props.type || buttonGroupContext?.type || ''
    )

    // calculate hover & active color by color
    const typeColor = computed(
      () => useCssVar(`--tw-color-${props.type}`).value
    )
    const buttonStyle = computed(() => {
      let styles = {}

      const buttonColor = props.color || typeColor.value

      if (buttonColor) {
        const shadeBgColor = new TinyColor(buttonColor).shade(10).toString()
        if (props.plain) {
          styles = {
            '--tw-button-bg-color': new TinyColor(buttonColor)
              .tint(90)
              .toString(),
            '--tw-button-text-color': buttonColor,
            '--tw-button-hover-text-color': 'var(--tw-color-white)',
            '--tw-button-hover-bg-color': buttonColor,
            '--tw-button-hover-border-color': buttonColor,
            '--tw-button-active-bg-color': shadeBgColor,
            '--tw-button-active-text-color': 'var(--tw-color-white)',
            '--tw-button-active-border-color': shadeBgColor,
          }
        } else {
          const tintBgColor = new TinyColor(buttonColor).tint(20).toString()
          styles = {
            '--tw-button-bg-color': buttonColor,
            '--tw-button-border-color': buttonColor,
            '--tw-button-hover-bg-color': tintBgColor,
            '--tw-button-hover-border-color': tintBgColor,
            '--tw-button-active-bg-color': shadeBgColor,
            '--tw-button-active-border-color': shadeBgColor,
          }
        }

        if (buttonDisabled.value) {
          const disabledButtonColor = new TinyColor(buttonColor)
            .tint(50)
            .toString()
          styles['--tw-button-disabled-bg-color'] = disabledButtonColor
          styles['--tw-button-disabled-border-color'] = disabledButtonColor
        }
      }

      return styles
    })

    const handleClick = (evt: MouseEvent) => {
      if (props.nativeType === 'reset') {
        form?.resetFields()
      }
      emit('click', evt)
    }

    return {
      buttonRef,
      buttonStyle,

      buttonSize,
      buttonType,
      buttonDisabled,

      shouldAddSpace,

      handleClick,

      ns,
    }
  },
})
</script>
