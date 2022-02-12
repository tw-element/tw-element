import { withInstall, withNoopInstall } from '@tw-element/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const TwSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export default TwSkeleton
export const TwSkeletonItem = withNoopInstall(SkeletonItem)

export * from './src/skeleton'
export * from './src/skeleton-item'
