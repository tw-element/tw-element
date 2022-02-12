import { h, nextTick } from 'vue'
import { useZIndex, POPPER_CONTAINER_SELECTOR } from '@tw-element/hooks'
import makeMount from '@tw-element/test-utils/make-mount'
import { rAF } from '@tw-element/test-utils/tick'
import { TwPopperTrigger } from '@tw-element/components/popper'
import Popover from '../src/index.vue'

const AXIOM = 'Rem is the best girl'
jest.useFakeTimers()
const mount = makeMount(Popover, {
  slots: {
    default: () => AXIOM,
    reference: () => h('button', 'click me'),
  },
  props: {},
  global: {
    attachTo: document.body,
  },
})
describe('Popover.vue', () => {
  let wrapper: ReturnType<typeof mount>
  const findContentComp = () =>
    wrapper.findComponent({
      name: 'TwPopperContent',
    })

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  test('render test', () => {
    wrapper = mount()

    expect(findContentComp().text()).toEqual(AXIOM)
  })

  test('should render with title', () => {
    const title = 'test title'
    wrapper = mount({
      props: {
        title,
      },
    })

    expect(findContentComp().text()).toContain(title)
  })

  test("should modify popover's style with width", async () => {
    wrapper = mount({
      props: {
        width: 200,
      },
    })

    const popperContent = findContentComp()
    expect(getComputedStyle(popperContent.element).width).toBe('200px')

    await wrapper.setProps({
      width: '100vw',
    })

    expect(getComputedStyle(popperContent.element).width).toBe('100vw')
  })

  test('the content should be overrode by slots', () => {
    const content = 'test content'
    wrapper = mount({
      props: {
        content,
      },
    })
    expect(findContentComp().text()).toContain(AXIOM)
  })

  test('should render content when no slots were passed', () => {
    const content = 'test content'
    const virtualRef = document.createElement('button')
    wrapper = makeMount(Popover, {
      props: {
        content,
        teleported: false,
        virtualRef,
        virtualTriggering: true,
      },
    })()

    expect(findContentComp().text()).toBe(content)
  })

  test('popper z-index should be dynamical', () => {
    wrapper = mount()

    const { currentZIndex } = useZIndex()
    expect(
      Number.parseInt(window.getComputedStyle(findContentComp().element).zIndex)
    ).toBeLessThanOrEqual(currentZIndex.value)
  })

  test('defind hide method', async () => {
    wrapper = mount()
    const vm = wrapper.vm as any
    expect(vm.hide).toBeDefined()
  })

  test('should be able to emit after-enter and after-leave', async () => {
    const wrapper = mount({
      attrs: {
        trigger: 'click',
      },
    })
    await nextTick()
    const trigger$ = wrapper.findComponent(TwPopperTrigger)
    const triggerEl = trigger$.find('.el-tooltip__trigger')
    await triggerEl.trigger('click')
    jest.runAllTimers()
    await rAF()
    expect(wrapper.emitted()).toHaveProperty('after-enter')

    await triggerEl.trigger('click')
    jest.runAllTimers()
    await rAF()
    expect(wrapper.emitted()).toHaveProperty('after-leave')
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      mount()

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).not.toBe('')
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      mount({
        props: { teleported: false },
      })

      await nextTick()
      expect(
        document.body.querySelector(POPPER_CONTAINER_SELECTOR).innerHTML
      ).toBe('')
    })
  })
})
