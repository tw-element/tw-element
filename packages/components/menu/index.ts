import { withInstall, withNoopInstall } from '@tw-element/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'

export const TwMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default TwMenu
export const TwMenuItem = withNoopInstall(MenuItem)
export const TwMenuItemGroup = withNoopInstall(MenuItemGroup)
export const TwSubMenu = withNoopInstall(SubMenu)

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
