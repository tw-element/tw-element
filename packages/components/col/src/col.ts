import { defineComponent, computed, inject, h, renderSlot } from 'vue'
import { buildProps, definePropType, mutable } from '@tw-element/utils'
import { useNamespace } from '@tw-element/hooks'
import type { ExtractPropTypes, CSSProperties } from 'vue'

type SizeObject = {
  span?: number
  offset?: number
}
type Size = number | SizeObject

export const colProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  xs: {
    type: definePropType<Size>([Number, Object]),
    default: () => mutable({} as const),
  },
  sm: {
    type: definePropType<Size>([Number, Object]),
    default: () => mutable({} as const),
  },
  md: {
    type: definePropType<Size>([Number, Object]),
    default: () => mutable({} as const),
  },
  lg: {
    type: definePropType<Size>([Number, Object]),
    default: () => mutable({} as const),
  },
  xl: {
    type: definePropType<Size>([Number, Object]),
    default: () => mutable({} as const),
  },
} as const)
export type ColProps = ExtractPropTypes<typeof colProps>

export default defineComponent({
  name: 'TwCol',
  props: colProps,

  setup(props, { slots }) {
    const { gutter } = inject('TwRow', { gutter: { value: 0 } })
    const ns = useNamespace('col')

    const style = computed<CSSProperties>(() => {
      if (gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`,
        }
      }
      return {}
    })

    const classList = computed(() => {
      const classes: string[] = []

      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach((prop) => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') classes.push(ns.b(`${props[prop]}`))
          else if (size > 0) classes.push(ns.b(`${prop}-${props[prop]}`))
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (typeof props[size] === 'number') {
          classes.push(ns.b(`${size}-${props[size]}`))
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size]
          Object.keys(sizeProps).forEach((prop) => {
            classes.push(
              prop !== 'span'
                ? ns.b(`${size}-${prop}-${sizeProps[prop]}`)
                : ns.b(`${size}-${sizeProps[prop]}`)
            )
          })
        }
      })
      // this is for the fix
      if (gutter.value) {
        classes.push('is-guttered')
      }

      return classes
    })

    return () =>
      h(
        props.tag,
        {
          class: [ns.b(), classList.value],
          style: style.value,
        },
        [renderSlot(slots, 'default')]
      )
  },
})
