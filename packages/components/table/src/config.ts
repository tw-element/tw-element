import { h } from 'vue'
import TwCheckbox from '@tw-element/components/checkbox'
import { TwIcon } from '@tw-element/components/icon'
import { ArrowRight, Loading } from '@tw-element/icons-vue'
import { getPropByPath } from '@tw-element/utils'

import type { VNode } from 'vue'
import type { TableColumnCtx } from './table-column/defaults'
import type { Store } from './store'
import type { TreeNode } from './table/defaults'

const defaultClassNames = {
  selection: 'table-column--selection',
  expand: 'table__expand-column',
}

export const cellStarts = {
  default: {
    order: '',
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
  },
}

export const getDefaultClassName = (type) => {
  return defaultClassNames[type] || ''
}

// 这些选项不应该被覆盖
export const cellForced = {
  selection: {
    renderHeader<T>({ store }: { store: Store<T> }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0
      }
      return h(TwCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate:
          store.states.selection.value.length > 0 &&
          !store.states.isAllSelected.value,
        'onUpdate:modelValue': store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value,
      })
    },
    renderCell<T>({
      row,
      column,
      store,
      $index,
    }: {
      row: T
      column: TableColumnCtx<T>
      store: Store<T>
      $index: string
    }) {
      return h(TwCheckbox, {
        disabled: column.selectable
          ? !column.selectable.call(null, row, $index)
          : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit('rowSelectedChanged', row)
        },
        onClick: (event: Event) => event.stopPropagation(),
        modelValue: store.isSelected(row),
      })
    },
    sortable: false,
    resizable: false,
  },
  index: {
    renderHeader<T>({ column }: { column: TableColumnCtx<T> }) {
      return column.label || '#'
    },
    renderCell<T>({
      column,
      $index,
    }: {
      column: TableColumnCtx<T>
      $index: number
    }) {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }
      return h('div', {}, [i])
    },
    sortable: false,
  },
  expand: {
    renderHeader<T>({ column }: { column: TableColumnCtx<T> }) {
      return column.label || ''
    },
    renderCell<T>({ row, store }: { row: T; store: Store<T> }) {
      const { ns } = store
      const classes = [ns.e('expand-icon')]
      if (store.states.expandRows.value.indexOf(row) > -1) {
        classes.push(ns.em('expand-icon', 'expanded'))
      }
      const callback = function (e: Event) {
        e.stopPropagation()
        store.toggleRowExpansion(row)
      }
      return h(
        'div',
        {
          class: classes,
          onClick: callback,
        },
        {
          default: () => {
            return [
              h(TwIcon, null, {
                default: () => {
                  return [h(ArrowRight)]
                },
              }),
            ]
          },
        }
      )
    },
    sortable: false,
    resizable: false,
  },
}

export function defaultRenderCell<T>({
  row,
  column,
  $index,
}: {
  row: T
  column: TableColumnCtx<T>
  $index: number
}) {
  const property = column.property
  const value = property && getPropByPath(row, property, false).v
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index)
  }
  return value?.toString?.() || ''
}

export function treeCellPrefix<T>({
  row,
  treeNode,
  store,
}: {
  row: T
  treeNode: TreeNode
  store: Store<T>
}) {
  if (!treeNode) return null
  const ele: VNode[] = []
  const callback = function (e) {
    e.stopPropagation()
    store.loadOrToggle(row)
  }
  const { ns } = store
  if (treeNode.indent) {
    ele.push(
      h('span', {
        class: ns.e('indent'),
        style: { 'padding-left': `${treeNode.indent}px` },
      })
    )
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e('expand-icon'),
      treeNode.expanded ? ns.em('expand-icon', 'expanded') : '',
    ]
    let icon = ArrowRight
    if (treeNode.loading) {
      icon = Loading
    }

    ele.push(
      h(
        'div',
        {
          class: expandClasses,
          onClick: callback,
        },
        {
          default: () => {
            return [
              h(
                TwIcon,
                { class: { [ns.is('loading')]: treeNode.loading } },
                {
                  default: () => [h(icon)],
                }
              ),
            ]
          },
        }
      )
    )
  } else {
    ele.push(
      h('span', {
        class: ns.e('placeholder'),
      })
    )
  }
  return ele
}
