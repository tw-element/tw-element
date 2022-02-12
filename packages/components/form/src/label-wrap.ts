import {
  defineComponent,
  Fragment,
  h,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue'
import { addResizeListener, removeResizeListener } from '@tw-element/utils'
import { twFormItemKey, twFormKey } from '@tw-element/tokens'
import type { ResizableElement, Nullable } from '@tw-element/utils'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElLabelWrap',
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },
  setup(props, { slots }) {
    const el = ref<Nullable<HTMLElement>>(null)
    const TwForm = inject(twFormKey)
    const TwFormItem = inject(twFormItemKey)

    const computedWidth = ref(0)
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        TwForm.registerLabelWidth(val, oldVal)
        TwFormItem.updateComputedLabelWidth(val)
      }
    })

    const getLabelWidth = () => {
      if (el.value?.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width
        return Math.ceil(parseFloat(width))
      } else {
        return 0
      }
    }
    const updateLabelWidth = (action = 'update') => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === 'update') {
            computedWidth.value = getLabelWidth()
          } else if (action === 'remove') {
            TwForm.deregisterLabelWidth(computedWidth.value)
          }
        }
      })
    }
    const updateLabelWidthFn = () => updateLabelWidth('update')

    onMounted(() => {
      addResizeListener(
        el.value.firstElementChild as ResizableElement,
        updateLabelWidthFn
      )
      updateLabelWidthFn()
    })

    onUpdated(updateLabelWidthFn)

    onBeforeUnmount(() => {
      updateLabelWidth('remove')
      removeResizeListener(
        el.value?.firstElementChild as ResizableElement,
        updateLabelWidthFn
      )
    })

    function render() {
      if (!slots) return null
      if (props.isAutoWidth) {
        const autoLabelWidth = TwForm.autoLabelWidth
        const style = {} as CSSProperties
        if (autoLabelWidth && autoLabelWidth !== 'auto') {
          const marginWidth = Math.max(
            0,
            parseInt(autoLabelWidth, 10) - computedWidth.value
          )
          const marginPosition =
            TwForm.labelPosition === 'left' ? 'marginRight' : 'marginLeft'
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`
          }
        }
        return h(
          'div',
          {
            ref: el,
            class: ['el-form-item__label-wrap'],
            style,
          },
          slots.default?.()
        )
      } else {
        return h(Fragment, { ref: el }, slots.default?.())
      }
    }

    return render
  },
})
