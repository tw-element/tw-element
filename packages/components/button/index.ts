import { withInstall, withNoopInstall } from '@tw-element/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const TwButton = withInstall(Button, {
  ButtonGroup,
})
export const TwButtonGroup = withNoopInstall(ButtonGroup)
export default TwButton

export * from './src/button'
