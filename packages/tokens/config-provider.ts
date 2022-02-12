import type { configProviderProps } from '@tw-element/components/config-provider'
import type { InjectionKey, ExtractPropTypes, Ref } from 'vue'

export type ConfigProviderContext = Partial<
  ExtractPropTypes<typeof configProviderProps>
>

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()
