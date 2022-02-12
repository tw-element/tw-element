import { withInstall, withNoopInstall } from '@tw-element/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const TwRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default TwRadio
export const TwRadioGroup = withNoopInstall(RadioGroup)
export const TwRadioButton = withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
