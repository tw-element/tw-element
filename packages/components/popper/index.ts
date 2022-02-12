import { withInstall } from '@tw-element/utils'
import Popper from './src/popper.vue'

export { default as TwPopperArrow } from './src/arrow.vue'
export { default as TwPopperTrigger } from './src/trigger.vue'
export { default as TwPopperContent } from './src/content.vue'

export const TwPopper = withInstall(Popper)
export default TwPopper

export * from './src/popper'
export * from './src/tokens'
export { useDeprecateAppendToBody } from './src/deprecation'

export type { Placement, Options } from '@popperjs/core'
