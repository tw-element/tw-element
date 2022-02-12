import { withInstallFunction } from '@tw-element/utils'

import Message from './src/message-method'

export const TwMessage = withInstallFunction(Message, '$message')
export default TwMessage

export * from './src/message'
