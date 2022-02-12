import { withInstall, withNoopInstall } from '@tw-element/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const TwCollapse = withInstall(Collapse, {
  CollapseItem,
})
export default TwCollapse
export const TwCollapseItem = withNoopInstall(CollapseItem)
