import { withInstall, withNoopInstall } from '@tw-element/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const TwCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default TwCheckbox

export const TwCheckboxButton = withNoopInstall(CheckboxButton)
export const TwCheckboxGroup = withNoopInstall(CheckboxGroup)
