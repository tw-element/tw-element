import { withInstall, withNoopInstall } from '@tw-element/utils'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const TwBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const TwBreadcrumbItem = withNoopInstall(BreadcrumbItem)
export default TwBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
