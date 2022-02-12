import { TwAffix } from '@tw-element/components/affix'
import { TwAlert } from '@tw-element/components/alert'
import { TwAutocomplete } from '@tw-element/components/autocomplete'
import { TwAvatar } from '@tw-element/components/avatar'
import { TwBacktop } from '@tw-element/components/backtop'
import { TwBadge } from '@tw-element/components/badge'
import {
  TwBreadcrumb,
  TwBreadcrumbItem,
} from '@tw-element/components/breadcrumb'
import { TwButton, TwButtonGroup } from '@tw-element/components/button'
import { TwCalendar } from '@tw-element/components/calendar'
import { TwCard } from '@tw-element/components/card'
import { TwCarousel, TwCarouselItem } from '@tw-element/components/carousel'
import { TwCascader } from '@tw-element/components/cascader'
import { TwCascaderPanel } from '@tw-element/components/cascader-panel'
import { TwCheckTag } from '@tw-element/components/check-tag'
import {
  TwCheckbox,
  TwCheckboxButton,
  TwCheckboxGroup,
} from '@tw-element/components/checkbox'
import { TwCol } from '@tw-element/components/col'
import { TwCollapse, TwCollapseItem } from '@tw-element/components/collapse'
import { TwCollapseTransition } from '@tw-element/components/collapse-transition'
import { TwColorPicker } from '@tw-element/components/color-picker'
import { TwConfigProvider } from '@tw-element/components/config-provider'
import {
  TwContainer,
  TwAside,
  TwFooter,
  TwHeader,
  TwMain,
} from '@tw-element/components/container'
import { TwDatePicker } from '@tw-element/components/date-picker'
import {
  TwDescriptions,
  TwDescriptionsItem,
} from '@tw-element/components/descriptions'
import { TwDialog } from '@tw-element/components/dialog'
import { TwDivider } from '@tw-element/components/divider'
import { TwDrawer } from '@tw-element/components/drawer'
import {
  TwDropdown,
  TwDropdownItem,
  TwDropdownMenu,
} from '@tw-element/components/dropdown'
import { TwEmpty } from '@tw-element/components/empty'
import { TwForm, TwFormItem } from '@tw-element/components/form'
import { TwIcon } from '@tw-element/components/icon'
import { TwImage } from '@tw-element/components/image'
import { TwImageViewer } from '@tw-element/components/image-viewer'
import { TwInput } from '@tw-element/components/input'
import { TwInputNumber } from '@tw-element/components/input-number'
import { TwLink } from '@tw-element/components/link'
import {
  TwMenu,
  TwMenuItem,
  TwMenuItemGroup,
} from '@tw-element/components/menu'
import { TwPageHeader } from '@tw-element/components/page-header'
import { TwPagination } from '@tw-element/components/pagination'
import { TwPopconfirm } from '@tw-element/components/popconfirm'
import { TwPopover } from '@tw-element/components/popover'
import { TwPopper } from '@tw-element/components/popper'
import { TwProgress } from '@tw-element/components/progress'
import {
  TwRadio,
  TwRadioButton,
  TwRadioGroup,
} from '@tw-element/components/radio'
import { TwRate } from '@tw-element/components/rate'
import { TwResult } from '@tw-element/components/result'
import { TwRow } from '@tw-element/components/row'
import { TwScrollbar } from '@tw-element/components/scrollbar'
import {
  TwSelect,
  TwOption,
  TwOptionGroup,
} from '@tw-element/components/select'
import { TwSelectV2 } from '@tw-element/components/select-v2'
import { TwSkeleton, TwSkeletonItem } from '@tw-element/components/skeleton'
import { TwSlider } from '@tw-element/components/slider'
import { TwSpace } from '@tw-element/components/space'
import { TwSteps, TwStep } from '@tw-element/components/steps'
import { TwSwitch } from '@tw-element/components/switch'
import { TwTable, TwTableColumn } from '@tw-element/components/table'
import { TwTabs, TwTabPane } from '@tw-element/components/tabs'
import { TwTag } from '@tw-element/components/tag'
import { TwTimePicker } from '@tw-element/components/time-picker'
import { TwTimeSelect } from '@tw-element/components/time-select'
import { TwTimeline, TwTimelineItem } from '@tw-element/components/timeline'
import { TwTooltip } from '@tw-element/components/tooltip'
import { TwTransfer } from '@tw-element/components/transfer'
import { TwTree } from '@tw-element/components/tree'
import { TwTreeV2 } from '@tw-element/components/tree-v2'
import { TwUpload } from '@tw-element/components/upload'
import type { Plugin } from 'vue'

export default [
  TwAffix,
  TwAlert,
  TwAutocomplete,
  TwAvatar,
  TwBacktop,
  TwBadge,
  TwBreadcrumb,
  TwBreadcrumbItem,
  TwButton,
  TwButtonGroup,
  TwCalendar,
  TwCard,
  TwCarousel,
  TwCarouselItem,
  TwCascader,
  TwCascaderPanel,
  TwCheckTag,
  TwCheckbox,
  TwCheckboxButton,
  TwCheckboxGroup,
  TwCol,
  TwCollapse,
  TwCollapseItem,
  TwCollapseTransition,
  TwColorPicker,
  TwConfigProvider,
  TwContainer,
  TwAside,
  TwFooter,
  TwHeader,
  TwMain,
  TwDatePicker,
  TwDescriptions,
  TwDescriptionsItem,
  TwDialog,
  TwDivider,
  TwDrawer,
  TwDropdown,
  TwDropdownItem,
  TwDropdownMenu,
  TwEmpty,
  TwForm,
  TwFormItem,
  TwIcon,
  TwImage,
  TwImageViewer,
  TwInput,
  TwInputNumber,
  TwLink,
  TwMenu,
  TwMenuItem,
  TwMenuItemGroup,
  TwPageHeader,
  TwPagination,
  TwPopconfirm,
  TwPopover,
  TwPopper,
  TwProgress,
  TwRadio,
  TwRadioButton,
  TwRadioGroup,
  TwRate,
  TwResult,
  TwRow,
  TwScrollbar,
  TwSelect,
  TwOption,
  TwOptionGroup,
  TwSelectV2,
  TwSkeleton,
  TwSkeletonItem,
  TwSlider,
  TwSpace,
  TwSteps,
  TwStep,
  TwSwitch,
  TwTable,
  TwTableColumn,
  TwTabs,
  TwTabPane,
  TwTag,
  TwTimePicker,
  TwTimeSelect,
  TwTimeline,
  TwTimelineItem,
  TwTooltip,
  TwTransfer,
  TwTree,
  TwTreeV2,
  TwUpload,
] as Plugin[]
