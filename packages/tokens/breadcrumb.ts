import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@tw-element/components/breadcrumb'

export const TwBreadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('TwBreadcrumbKey')
