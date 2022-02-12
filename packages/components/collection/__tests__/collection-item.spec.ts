import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import TestCollection, {
  CollectionChildComponent,
  CollectionItemChildComponent,
} from '../test-helper'

import type { ComponentPublicInstance } from 'vue'
import type { TwCollectionInjectionContext } from '../src/tokens'

const { TwCollection, TwCollectionItem } = TestCollection
const AXIOM = 'rem is the best girl'

describe('<TwCollectionItem />', () => {
  const createComponent = (props = {}, count = 3) =>
    mount(TwCollection as any, {
      props,
      slots: {
        default: () => {
          return h(
            CollectionChildComponent as any,
            {},
            {
              default: () =>
                Array.from({ length: count }).map((idx) => {
                  return h(
                    TwCollectionItem as any,
                    {},
                    {
                      default: () => [
                        h(
                          CollectionItemChildComponent,
                          {},
                          { default: () => `${AXIOM} ${idx}` }
                        ),
                      ],
                    }
                  )
                }),
            }
          )
        },
      },
    })

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    wrapper.unmount()
  })

  describe('render', () => {
    it('should be able to render correctly', async () => {
      wrapper = createComponent()
      await nextTick()

      expect(wrapper.findAllComponents(TwCollectionItem as any)).toHaveLength(3)
      expect(wrapper.findComponent(TwCollectionItem as any).text()).toContain(
        AXIOM
      )
    })
  })

  describe('register child instance', () => {
    wrapper = createComponent()

    const childItemComponent = wrapper.findComponent(
      CollectionChildComponent as any
    )
    const childVm =
      childItemComponent.vm as ComponentPublicInstance<TwCollectionInjectionContext>

    const collectionItems = wrapper.findAllComponents(
      CollectionItemChildComponent as any
    )
    expect(childVm.itemMap.size).toBe(3)
    const items = childVm.getItems()
    expect(childVm.getItems()).toHaveLength(3)
    expect(items[0].ref).toBe(collectionItems.at(0).element)
  })
})
