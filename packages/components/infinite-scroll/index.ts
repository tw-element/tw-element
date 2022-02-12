import InfiniteScroll from './src/index'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const TwInfiniteScroll = _InfiniteScroll
