<template>
  <div ref="formItemRef" class="el-form-item" :class="formItemClass">
    <LabelWrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="TwForm.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="el-form-item__label"
        :style="labelStyle"
      >
        <slot name="label" :label="currentLabel">
          {{ currentLabel }}
        </slot>
      </label>
    </LabelWrap>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : TwForm.inlineMessage || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
  nextTick,
} from 'vue'
import { NOOP } from '@vue/shared'
import AsyncValidator from 'async-validator'
import {
  addUnit,
  isValidComponentSize,
  getPropByPath,
} from '@tw-element/utils'
import { twFormItemKey, twFormKey } from '@tw-element/tokens'
import { useSize } from '@tw-element/hooks'
import LabelWrap from './label-wrap'

import type { PropType, CSSProperties } from 'vue'
import type { ComponentSize } from '@tw-element/constants'
import type { TwFormContext, ValidateFieldCallback } from '@tw-element/tokens'
import type { FormItemRule } from './form.type'

export default defineComponent({
  name: 'TwFormItem',
  componentName: 'TwFormItem',
  components: {
    LabelWrap,
  },
  props: {
    label: String,
    labelWidth: {
      type: [String, Number],
      default: '',
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array] as PropType<FormItemRule | FormItemRule[]>,
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
  },
  setup(props, { slots }) {
    const TwForm = inject(twFormKey, {} as TwFormContext)
    const validateState = ref('')
    const validateMessage = ref('')
    const isValidationEnabled = ref(false)

    const computedLabelWidth = ref('')

    const formItemRef = ref<HTMLDivElement>()

    const vm = getCurrentInstance()
    const isNested = computed(() => {
      let parent = vm.parent
      while (parent && parent.type.name !== 'TwForm') {
        if (parent.type.name === 'TwFormItem') {
          return true
        }
        parent = parent.parent
      }
      return false
    })

    let initialValue = undefined

    watch(
      () => props.error,
      (val) => {
        validateMessage.value = val
        validateState.value = val ? 'error' : ''
      },
      {
        immediate: true,
      }
    )
    watch(
      () => props.validateStatus,
      (val) => {
        validateState.value = val
      }
    )

    const labelFor = computed(() => props.for || props.prop)
    const labelStyle = computed(() => {
      const ret: CSSProperties = {}
      if (TwForm.labelPosition === 'top') return ret
      const labelWidth = addUnit(props.labelWidth || TwForm.labelWidth)
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    })
    const contentStyle = computed(() => {
      const ret: CSSProperties = {}
      if (TwForm.labelPosition === 'top' || TwForm.inline) {
        return ret
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return ret
      }
      const labelWidth = addUnit(props.labelWidth || TwForm.labelWidth)
      if (!props.label && !slots.label) {
        ret.marginLeft = labelWidth
      }
      return ret
    })
    const fieldValue = computed(() => {
      const model = TwForm.model
      if (!model || !props.prop) {
        return
      }

      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    })
    const isRequired = computed(() => {
      const rules = getRules()
      let required = false

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            required = true
            return false
          }
          return true
        })
      }
      return required
    })
    const sizeClass = useSize(undefined, { formItem: false })

    const validate = (
      trigger: string,
      callback: ValidateFieldCallback = NOOP
    ) => {
      if (!isValidationEnabled.value) {
        callback()
        return
      }
      const rules = getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && props.required === undefined) {
        callback()
        return
      }
      validateState.value = 'validating'
      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger
        })
      }
      descriptor[props.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[props.prop] = fieldValue.value
      validator.validate(model, { firstFields: true }, (errors, fields) => {
        validateState.value = !errors ? 'success' : 'error'
        validateMessage.value = errors
          ? errors[0].message || `${props.prop} is required`
          : ''
        // fix: #3860 after version 3.5.2, async-validator also return fields if validation fails
        callback(validateMessage.value, errors ? fields : {})
        TwForm.emit?.(
          'validate',
          props.prop,
          !errors,
          validateMessage.value || null
        )
      })
    }

    const clearValidate = () => {
      validateState.value = ''
      validateMessage.value = ''
    }
    const resetField = () => {
      const model = TwForm.model
      const value = fieldValue.value
      let path = props.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }
      const prop = getPropByPath(model, path, true)
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue)
      } else {
        prop.o[prop.k] = initialValue
      }
      nextTick(() => {
        clearValidate()
      })
    }

    const getRules = () => {
      const formRules = TwForm.rules
      const selfRules = props.rules
      const requiredRule =
        props.required !== undefined ? { required: !!props.required } : []

      const prop = getPropByPath(formRules, props.prop || '', false)
      const normalizedRule = formRules ? prop.o[props.prop || ''] || prop.v : []

      return [].concat(selfRules || normalizedRule || []).concat(requiredRule)
    }
    const getFilteredRule = (trigger) => {
      const rules = getRules()

      return rules
        .filter((rule) => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map((rule) => ({ ...rule }))
    }

    const evaluateValidationEnabled = () => {
      isValidationEnabled.value = !!getRules()?.length
    }

    const updateComputedLabelWidth = (width: string | number) => {
      computedLabelWidth.value = width ? `${width}px` : ''
    }

    const TwFormItem = reactive({
      ...toRefs(props),
      size: sizeClass,
      validateState,
      $el: formItemRef,
      evaluateValidationEnabled,
      resetField,
      clearValidate,
      validate,
      updateComputedLabelWidth,
    })

    onMounted(() => {
      if (props.prop) {
        TwForm?.addField(TwFormItem)

        const value = fieldValue.value
        initialValue = Array.isArray(value) ? [...value] : value

        evaluateValidationEnabled()
      }
    })
    onBeforeUnmount(() => {
      TwForm?.removeField(TwFormItem)
    })

    provide(twFormItemKey, TwFormItem)

    const formItemClass = computed(() => [
      {
        'el-form-item--feedback': TwForm.statusIcon,
        'is-error': validateState.value === 'error',
        'is-validating': validateState.value === 'validating',
        'is-success': validateState.value === 'success',
        'is-required': isRequired.value || props.required,
        'is-no-asterisk': TwForm.hideRequiredAsterisk,
      },
      sizeClass.value ? `el-form-item--${sizeClass.value}` : '',
    ])

    const shouldShowError = computed(() => {
      return (
        validateState.value === 'error' &&
        props.showMessage &&
        TwForm.showMessage
      )
    })

    const currentLabel = computed(
      () => (props.label || '') + (TwForm.labelSuffix || '')
    )

    return {
      formItemRef,
      formItemClass,
      shouldShowError,
      TwForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate,
      currentLabel,
    }
  },
})
</script>
