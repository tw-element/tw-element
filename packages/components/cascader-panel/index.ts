import CascaderPanel from './src/index.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

CascaderPanel.install = (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

const _CascaderPanel = CascaderPanel as SFCWithInstall<typeof CascaderPanel>

export default _CascaderPanel
export const TwCascaderPanel = _CascaderPanel
export * from './src/types'
export * from './src/config'
