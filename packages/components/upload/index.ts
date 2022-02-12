import Upload from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

Upload.install = (app: App): void => {
  app.component(Upload.name, Upload)
}

const _Upload = Upload as SFCWithInstall<typeof Upload>

export default _Upload
export const TwUpload = _Upload
