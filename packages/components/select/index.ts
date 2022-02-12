import { withInstall, withNoopInstall } from '@tw-element/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const TwSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default TwSelect
export const TwOption = withNoopInstall(Option)
export const TwOptionGroup = withNoopInstall(OptionGroup)

export * from './src/token'
