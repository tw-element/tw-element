import { withInstall, withNoopInstall } from '@tw-element/utils'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

export const TwContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default TwContainer
export const TwAside = withNoopInstall(Aside)
export const TwFooter = withNoopInstall(Footer)
export const TwHeader = withNoopInstall(Header)
export const TwMain = withNoopInstall(Main)
