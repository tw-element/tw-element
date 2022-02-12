import Popover from './src/index.vue'
import PopoverDirective, { VPopover } from './src/directive'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
}
;(PopoverDirective as SFCWithInstall<typeof PopoverDirective>).install = (
  app: App
) => {
  app.directive(VPopover, PopoverDirective)
}

const _PopoverDirective = PopoverDirective as SFCWithInstall<
  typeof PopoverDirective
>

Popover.directive = _PopoverDirective

const _Popover = Popover as any as SFCWithInstall<typeof Popover> & {
  directive: typeof _PopoverDirective
}

export default _Popover
export const TwPopover = _Popover
export const TwPopoverDirective = _PopoverDirective
