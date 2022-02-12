import { ref, inject, onMounted, onBeforeUnmount, provide, unref } from 'vue'
import Collection from './collection.vue'
import CollectionItem from './collection-item.vue'

import type { InjectionKey } from 'vue'
import type {
  TwCollectionInjectionContext,
  TwCollectionItemInjectionContext,
} from './tokens'

export const COLLECTION_ITEM_SIGN = `data-el-collection-item`

// Make sure the first letter of name is capitalized
export const createCollectionWithScope = (name: string) => {
  const COLLECTION_NAME = `El${name}Collection`
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`
  const COLLECTION_INJECTION_KEY: InjectionKey<TwCollectionInjectionContext> =
    Symbol(COLLECTION_NAME)
  const COLLECTION_ITEM_INJECTION_KEY: InjectionKey<TwCollectionItemInjectionContext> =
    Symbol(COLLECTION_ITEM_NAME)

  const TwCollection = {
    ...Collection,
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref<HTMLElement | null>(null)
      const itemMap: TwCollectionInjectionContext['itemMap'] = new Map()
      const getItems = () => {
        const collectionEl = unref(collectionRef)

        if (!collectionEl) return []
        const orderedNodes = Array.from(
          collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`)
        )

        const items = [...itemMap.values()]

        const orderedItems = items.sort(
          (a, b) => orderedNodes.indexOf(a.ref!) - orderedNodes.indexOf(b.ref!)
        )
        return orderedItems
      }

      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef,
      })
    },
  }

  const TwCollectionItem = {
    ...CollectionItem,
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref<HTMLElement | null>(null)
      const collectionInjection = inject(COLLECTION_INJECTION_KEY, undefined)!

      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef,
      })

      onMounted(() => {
        const collectionItemEl = unref(collectionItemRef)
        if (collectionItemEl) {
          collectionInjection.itemMap.set(collectionItemEl, {
            ref: collectionItemEl,
            ...attrs,
          })
        }
      })

      onBeforeUnmount(() => {
        const collectionItemEl = unref(collectionItemRef)!
        collectionInjection.itemMap.delete(collectionItemEl)
      })
    },
  }

  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    TwCollection,
    TwCollectionItem,
  }
}
