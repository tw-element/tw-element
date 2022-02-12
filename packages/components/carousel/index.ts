import { withInstall, withNoopInstall } from '@tw-element/utils'
import Carousel from './src/main.vue'
import CarouselItem from './src/item.vue'

export const TwCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default TwCarousel

export const TwCarouselItem = withNoopInstall(CarouselItem)
