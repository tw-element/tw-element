import {
  cloneVNode,
  Comment,
  defineComponent,
  Fragment,
  h,
  Text,
  withDirectives,
  inject,
} from 'vue'
import { NOOP, isObject } from '@vue/shared'
import {
  FORWARD_REF_INJECTION_KEY,
  useForwardRefDirective,
} from '@tw-element/hooks'
import { debugWarn } from '@tw-element/utils'

import type { VNode } from 'vue'

const NAME = 'ElOnlyChild'

const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, undefined)!
    const forwardRefDirective = useForwardRefDirective(
      forwardRefInjection.setForwardRef ?? NOOP
    )
    return () => {
      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        debugWarn(NAME, 'ElOnlyChild requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        debugWarn(NAME, 'no valid child node found')
        return null
      }

      return withDirectives(cloneVNode(firstLegitNode, attrs), [
        [forwardRefDirective],
      ])
    }
  },
})

function findFirstLegitChild(node: VNode[] | undefined) {
  if (!node) return null
  const children = node as VNode[]
  for (let i = 0; i < children.length; i++) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
    const child = children[i]
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
          return wrapTextContent(child)
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return child
      }
    }
    return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(s: string | VNode) {
  return h('span', { class: 'el-only-child__content' }, [s])
}

export default OnlyChild
