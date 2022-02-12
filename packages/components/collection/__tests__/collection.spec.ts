import { h } from 'vue'
import { mount } from '@vue/test-utils'
import TestCollection, {
  CollectionChildComponent as ChildComponent,
} from '../test-helper'

import type { ComponentPublicInstance } from 'vue'
import type { TwCollectionInjectionContext } from '../src/tokens'

const { TwCollection } = TestCollection
const AXIOM = 'rem is the best girl'

describe('<TwCollection />', () => {
  const createComponent = (props = {}) =>
    mount(TwCollection as any, {
      props,
      slots: {
        default: () =>
          h(ChildComponent, null, {
            default: () => AXIOM,
          }),
      },
    })

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    wrapper.unmount()
  })

  describe('render', () => {
    it('should be able to render correctly', () => {
      wrapper = createComponent()

      expect(wrapper.text()).toContain(AXIOM)
    })
  })

  describe('provides', () => {
    it('should be able to provide valid data', async () => {
      wrapper = createComponent()

      const childComponent = wrapper.findComponent(ChildComponent as any)
      const vm =
        childComponent.vm as ComponentPublicInstance<TwCollectionInjectionContext>
      expect([...vm.itemMap.values()]).toHaveLength(0)
      expect(vm.getItems()).toHaveLength(0)
      expect(vm.collectionRef).toBe(childComponent.element)
    })
  })
})
