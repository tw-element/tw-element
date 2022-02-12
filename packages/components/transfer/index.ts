import Transfer from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer)
}

const _Transfer = Transfer as SFCWithInstall<typeof Transfer>

export default _Transfer
export const TwTransfer = _Transfer

export * from './src/transfer'
