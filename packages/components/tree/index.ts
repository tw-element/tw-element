import Tree from './src/tree.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@tw-element/utils'

Tree.install = (app: App): void => {
  app.component(Tree.name, Tree)
}

const _Tree = Tree as SFCWithInstall<typeof Tree>

export default _Tree
export const TwTree = _Tree
