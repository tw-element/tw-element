import type { InjectionKey } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type { ComponentSize } from '@tw-element/constants'

export interface TwFormContext {
  registerLabelWidth(width: number, oldWidth: number): void
  deregisterLabelWidth(width: number): void
  autoLabelWidth: string | undefined
  emit: (evt: string, ...args: any[]) => void
  addField: (field: TwFormItemContext) => void
  removeField: (field: TwFormItemContext) => void
  resetFields: () => void
  clearValidate: (props: string | string[]) => void
  validateField: (props: string | string[], cb: ValidateFieldCallback) => void
  labelSuffix: string
  inline?: boolean
  inlineMessage?: boolean
  model?: Record<string, unknown>
  size?: ComponentSize
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string | number
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
}

export interface ValidateFieldCallback {
  (isValid?: string, invalidFields?: ValidateFieldsError): void
}

export interface TwFormItemContext {
  prop?: string
  size?: ComponentSize
  validateState: string
  $el: HTMLDivElement
  validate(trigger: string, callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  evaluateValidationEnabled(): void
  resetField(): void
  clearValidate(): void
}

export const twFormKey: InjectionKey<TwFormContext> = Symbol('TwForm')
export const twFormItemKey: InjectionKey<TwFormItemContext> =
  Symbol('TwFormItem')
