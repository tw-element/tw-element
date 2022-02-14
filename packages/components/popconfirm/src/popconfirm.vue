<template>
  <el-tooltip
    ref="tooltipRef"
    v-bind="$attrs"
    trigger="click"
    effect="light"
    :popper-class="`${ns.namespace.value}-popover`"
    :teleported="compatTeleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    persistent
  >
    <template #content>
      <div :class="ns.b()">
        <div :class="ns.e('main')">
          <el-icon
            v-if="!hideIcon && icon"
            :class="ns.e('icon')"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </el-icon>
          {{ title }}
        </div>
        <div :class="ns.e('action')">
          <tw-button size="small" :type="cancTwButtonType" @click="cancel">
            {{ finalCancTwButtonText }}
          </tw-button>
          <tw-button size="small" :type="confirmButtonType" @click="confirm">
            {{ finalConfirmButtonText }}
          </tw-button>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from 'vue'
import TwButton from '@tw-element/components/button'
import TwIcon from '@tw-element/components/icon'
import ElTooltip from '@tw-element/components/tooltip'
import { useDeprecateAppendToBody } from '@tw-element/components/popper'
import { useLocale, useNamespace } from '@tw-element/hooks'
import { popconfirmProps } from './popconfirm'

const COMPONENT_NAME = 'TwPopconfirm'
export default defineComponent({
  name: COMPONENT_NAME,

  components: {
    TwButton,
    ElTooltip,
    TwIcon,
  },

  props: popconfirmProps,

  setup(props) {
    const { compatTeleported } = useDeprecateAppendToBody(
      COMPONENT_NAME,
      'appendToBody'
    )
    const { t } = useLocale()
    const ns = useNamespace('popconfirm')
    const tooltipRef = ref<{ onClose: () => void }>()

    const hidePopper = () => {
      unref(tooltipRef)?.onClose?.()
    }

    const handleCallback = () => {
      hidePopper()
    }

    const confirm = (e: Event) => {
      props.onConfirm?.(e)
      handleCallback()
    }
    const cancel = (e: Event) => {
      props.onCancel?.(e)
      handleCallback()
    }

    const finalConfirmButtonText = computed(
      () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
    )
    const finalCancTwButtonText = computed(
      () => props.cancTwButtonText || t('el.popconfirm.cancTwButtonText')
    )

    return {
      finalConfirmButtonText,
      finalCancTwButtonText,
      tooltipRef,
      ns,

      // Deprecation in 2.1.0
      compatTeleported,

      confirm,
      cancel,
    }
  },
})
</script>
