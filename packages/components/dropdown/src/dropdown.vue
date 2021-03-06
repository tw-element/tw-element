<template>
  <div :class="ns.b()">
    <el-tooltip
      ref="popperRef"
      :effect="effect"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      :hide-after="hideTimeout"
      :manual-mode="true"
      :placement="placement"
      :popper-class="[ns.e('popper'), popperClass]"
      :reference-element="referenceElementRef?.$el"
      :trigger="trigger"
      :show-after="showTimeout"
      :stop-popper-mouse-event="false"
      :virtual-ref="triggeringElementRef"
      :virtual-triggering="splitButton"
      append-to-body
      pure
      :transition="`${ns.namespace.value}-zoom-in-top`"
      persistent
      @show="$emit('visible-change', true)"
      @hide="$emit('visible-change', false)"
    >
      <template #content>
        <el-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          tag="ul"
          :view-class="ns.e('list')"
        >
          <el-focus-trap trapped @mount-on-focus="onMountOnFocus">
            <el-roving-focus-group
              :loop="loop"
              :current-tab-id="currentTabId"
              orientation="horizontal"
              @current-tab-id-change="handleCurrentTabIdChange"
              @entry-focus="handleEntryFocus"
            >
              <el-dropdown-collection>
                <slot name="dropdown"></slot>
              </el-dropdown-collection>
            </el-roving-focus-group>
          </el-focus-trap>
        </el-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <div :class="dropdownTriggerKls">
          <slot name="default" />
        </div>
      </template>
    </el-tooltip>
    <template v-if="splitButton">
      <tw-button-group>
        <tw-button
          ref="referenceElementRef"
          :size="dropdownSize"
          :type="type"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </tw-button>
        <tw-button
          ref="triggeringElementRef"
          :size="dropdownSize"
          :type="type"
          :class="ns.e('caret-button')"
        >
          <el-icon :class="ns.e('icon')"><arrow-down /></el-icon>
        </tw-button>
      </tw-button-group>
    </template>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  provide,
  ref,
  toRef,
  unref,
} from 'vue'
import TwButton from '@tw-element/components/button'
import ElTooltip from '@tw-element/components/tooltip'
import TwScrollbar from '@tw-element/components/scrollbar'
import TwIcon from '@tw-element/components/icon'
import ElFocusTrap from '@tw-element/components/focus-trap'
import ElRovingFocusGroup from '@tw-element/components/roving-focus-group'
import { addUnit } from '@tw-element/utils'
import { ArrowDown } from '@element-plus/icons-vue'
import { useNamespace, useSize } from '@tw-element/hooks'
import { TwCollection as TwDropdownCollection, dropdownProps } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

import type { CSSProperties } from 'vue'

const { ButtonGroup: TwButtonGroup } = TwButton

export default defineComponent({
  name: 'TwDropdown',
  components: {
    TwButton,
    ElFocusTrap,
    TwButtonGroup,
    TwScrollbar,
    TwDropdownCollection,
    ElTooltip,
    ElRovingFocusGroup,
    TwIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const ns = useNamespace('dropdown')

    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref<InstanceType<typeof ElTooltip> | null>(null)
    const contentRef = ref<HTMLElement | null>(null)
    const scrollbar = ref(null)
    const currentTabId = ref<string | null>(null)
    const isUsingKeyboard = ref(false)

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)])

    function handleClick() {
      handleClose()
    }

    function handleClose() {
      popperRef.value?.onClose()
    }

    function handleOpen() {
      popperRef.value?.onOpen()
    }

    const dropdownSize = useSize()

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentEl = unref(contentRef)

      contentEl?.focus()
      currentTabId.value = null
    }

    function handleCurrentTabIdChange(id: string) {
      currentTabId.value = id
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
    })

    provide('TwDropdown', {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, 'trigger'),
      hideOnClick: toRef(props, 'hideOnClick'),
    })

    const onMountOnFocus = (e: Event) => {
      e.preventDefault()
      contentRef.value?.focus?.({
        preventScroll: true,
      })
    }

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      onMountOnFocus,
      popperRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
