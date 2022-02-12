import { withInstall, withNoopInstall } from '@tw-element/utils'

import Descriptions from './src/index.vue'
import DescriptionsItem from './src/description-item'

export const TwDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})
export default TwDescriptions

export const TwDescriptionsItem = withNoopInstall(DescriptionsItem)
