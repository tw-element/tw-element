import { withInstall, withNoopInstall } from '@tw-element/utils'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const TwDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default TwDropdown
export const TwDropdownItem = withNoopInstall(DropdownItem)
export const TwDropdownMenu = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/tokens'
