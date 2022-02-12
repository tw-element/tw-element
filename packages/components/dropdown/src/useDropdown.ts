import { inject, computed, ref } from 'vue'
import { generateId, on, addClass } from '@tw-element/utils'
import { EVENT_CODE } from '@tw-element/constants'
import { useNamespace } from '@tw-element/hooks'
import type { Nullable } from '@tw-element/utils'
import type { ITwDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const TwDropdown = inject<ITwDropdownInstance>('TwDropdown', {})
  const _TwDropdownSize = computed(() => TwDropdown?.dropdownSize)

  return {
    TwDropdown,
    _TwDropdownSize,
  }
}

export const initDropdownDomEvent = (
  dropdownChildren,
  triggerElm,
  _instance
) => {
  const ns = useNamespace('dropdown')
  const menuItems = ref<Nullable<HTMLButtonElement[]>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownElm = ref<Nullable<HTMLElement>>(null)
  const listId = ref(`dropdown-menu-${generateId()}`)
  dropdownElm.value = dropdownChildren?.subTree.el

  function removeTabindex() {
    triggerElm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach((item) => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabindex(ele) {
    removeTabindex()
    ele?.setAttribute('tabindex', '0')
  }

  function handleTriggerKeyDown(ev: KeyboardEvent) {
    const code = ev.code
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      removeTabindex()
      resetTabindex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      _instance.handleClick()
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
    }
  }

  function handleItemKeyDown(ev) {
    const code = ev.code
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target)
    const max = menuItemsArray.value.length - 1
    let nextIndex
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else {
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabindex()
      resetTabindex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      triggerElmFocus()
      target.click()
      if (_instance.props.hideOnClick) {
        _instance.hide()
      }
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
      triggerElmFocus()
    }
  }

  function initAria() {
    dropdownElm.value.setAttribute('id', listId.value)
    triggerElm.setAttribute('aria-haspopup', 'list')
    triggerElm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerElm.setAttribute('role', 'button')
      triggerElm.setAttribute('tabindex', _instance.props.tabindex)
      addClass(triggerElm, ns.b('selfdefine'))
    }
  }

  function initEvent() {
    on(triggerElm, 'keydown', handleTriggerKeyDown)
    on(dropdownElm.value, 'keydown', handleItemKeyDown, true)
  }

  function initDomOperation() {
    menuItems.value = dropdownElm.value.querySelectorAll(
      "[tabindex='-1']"
    ) as unknown as HTMLButtonElement[]
    menuItemsArray.value = [].slice.call(menuItems.value)

    initEvent()
    initAria()
  }

  function triggerElmFocus() {
    triggerElm.focus()
  }

  initDomOperation()
}
