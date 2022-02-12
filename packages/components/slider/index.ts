import Slider from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

Slider.install = (app: App): void => {
  app.component(Slider.name, Slider)
}

const _Slider = Slider as SFCWithInstall<typeof Slider>

export default _Slider
export const TwSlider = _Slider

export * from './src/slider.type'
