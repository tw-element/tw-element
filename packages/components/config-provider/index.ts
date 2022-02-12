import { withInstall } from '@tw-element/utils'

import ConfigProvider from './src/config-provider'

export const TwConfigProvider = withInstall(ConfigProvider)
export default TwConfigProvider

export * from './src/config-provider'
