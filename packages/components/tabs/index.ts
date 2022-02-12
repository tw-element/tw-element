import { withInstall, withNoopInstall } from '@tw-element/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const TwTabs = withInstall(Tabs, {
  TabPane,
})
export default TwTabs
export const TwTabPane = withNoopInstall(TabPane)

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
