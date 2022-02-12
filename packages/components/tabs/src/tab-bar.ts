import { buildProps, definePropType, mutable } from '@tw-element/utils'
import type { TabsPaneContext } from '@tw-element/tokens'
import type { ExtractPropTypes } from 'vue'

export const tabBar = buildProps({
  tabs: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
} as const)

export type TabBar = ExtractPropTypes<typeof tabBar>
