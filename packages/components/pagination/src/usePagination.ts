import { inject } from 'vue'
import { TwPaginationKey } from '@tw-element/tokens'

export const usePagination = () => inject(TwPaginationKey, {})
