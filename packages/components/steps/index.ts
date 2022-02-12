import { withInstall, withNoopInstall } from '@tw-element/utils'

import Steps from './src/index.vue'
import Step from './src/item.vue'

export const TwSteps = withInstall(Steps, {
  Step,
})
export default TwSteps
export const TwStep = withNoopInstall(Step)
