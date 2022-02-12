import { TwInfiniteScroll } from '@tw-element/components/infinite-scroll'
import { TwLoading } from '@tw-element/components/loading'
import { TwMessage } from '@tw-element/components/message'
import { TwMessageBox } from '@tw-element/components/message-box'
import { TwNotification } from '@tw-element/components/notification'
import { TwPopoverDirective } from '@tw-element/components/popover'

import type { Plugin } from 'vue'

export default [
  TwInfiniteScroll,
  TwLoading,
  TwMessage,
  TwMessageBox,
  TwNotification,
  TwPopoverDirective,
] as Plugin[]
