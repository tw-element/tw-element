<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  provide,
  nextTick,
  toRefs,
  h,
  renderSlot,
} from 'vue'
import { UPDATE_MODEL_EVENT } from '@tw-element/constants'
import { isValidComponentSize } from '@tw-element/utils'
import { useSize, useNamespace } from '@tw-element/hooks'
import { useCheckboxGroup } from './useCheckbox'

import type { PropType } from 'vue'
import type { ComponentSize } from '@tw-element/constants'

export default defineComponent({
  name: 'TwCheckboxGroup',

  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },

  emits: [UPDATE_MODEL_EVENT, 'change'],

  setup(props, { emit, slots }) {
    const { TwFormItem } = useCheckboxGroup()
    const checkboxGroupSize = useSize()
    const ns = useNamespace('checkbox')

    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value)
      nextTick(() => {
        emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'TwCheckboxGroup',
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent,
    })

    watch(
      () => props.modelValue,
      () => {
        TwFormItem.validate?.('change')
      }
    )
    return () => {
      return h(
        props.tag,
        {
          class: ns.b('group'),
          role: 'group',
          'aria-label': 'checkbox-group',
        },
        [renderSlot(slots, 'default')]
      )
    }
  },
})
</script>
