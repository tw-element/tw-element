import { ref, computed } from 'vue'
import { useGlobalConfig } from '../use-global-config'

const zIndex = ref(0)

export const useZIndex = () => {
  const initialZIndex = useGlobalConfig('zIndex', 2000) // TODO: move to @tw-element/constants
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
