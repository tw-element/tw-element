import { withInstallFunction } from '@tw-element/utils'

import Notify from './src/notify'

export const TwNotification = withInstallFunction(Notify, '$notify')
export default TwNotification

export * from './src/notification'
