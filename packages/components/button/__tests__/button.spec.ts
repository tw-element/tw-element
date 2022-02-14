import { ref, h, nextTick, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { Loading, Search } from '@element-plus/icons-vue'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('tw-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: Search },
    })
    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })
  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
  it('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })
  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' },
    })
    expect(wrapper.classes()).toContain('tw-button--large')
  })
  it('plain', () => {
    const wrapper = mount(Button, {
      props: { plain: true },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })
  it('round', () => {
    const wrapper = mount(Button, {
      props: { round: true },
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it('circle', () => {
    const wrapper = mount(Button, {
      props: { circle: true },
    })
    expect(wrapper.classes()).toContain('is-circle')
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>',
      },
    })
    await (<HTMLElement>wrapper.element.querySelector('.inner-slot')).click()
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
      props: { loading: true },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('loading icon', () => {
    const wrapper = mount(Button, {
      props: {
        loadingIcon: Search,
        loading: true,
      },
    })
    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('loading slot', () => {
    const App = defineComponent({
      setup() {
        return () =>
          h(
            Button,
            {
              loading: true,
            },
            {
              default: 'Loading',
              loading: h(
                'span',
                {
                  class: 'custom-loading',
                },
                ['111']
              ),
            }
          )
      },
    })
    const wrapper = mount(App)
    expect(wrapper.find('.custom-loading').exists()).toBeTruthy()
  })
})
describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      template: `
        <tw-button-group>
        <tw-button type="primary">Prev</tw-button>
        <tw-button type="primary">Next</tw-button>
        </tw-button-group>`,
      components: {
        'tw-button-group': ButtonGroup,
        'tw-button': Button,
      },
    })
    expect(wrapper.classes()).toContain('tw-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref('small')
    const wrapper = mount({
      setup() {
        return () =>
          h(ButtonGroup, { size: size.value }, () => [
            h(Button, { type: 'primary' }, () => 'Prev'),
            h(Button, { type: 'primary' }, () => 'Next'),
          ])
      },
    })
    expect(wrapper.classes()).toContain('tw-button-group')
    expect(
      wrapper.findAll('.tw-button-group button.tw-button--small').length
    ).toBe(2)

    size.value = 'large'
    await nextTick()

    expect(
      wrapper.findAll('.tw-button-group button.tw-button--large').length
    ).toBe(2)
  })

  it('button group type', async () => {
    const wrapper = mount({
      setup() {
        return () =>
          h(ButtonGroup, { type: 'warning' }, () => [
            h(Button, { type: 'primary' }, () => 'Prev'),
            h(Button, {}, () => 'Next'),
          ])
      },
    })
    expect(wrapper.classes()).toContain('tw-button-group')
    expect(
      wrapper.findAll('.tw-button-group button.tw-button--primary').length
    ).toBe(1)
    expect(
      wrapper.findAll('.tw-button-group button.tw-button--warning').length
    ).toBe(1)
  })

  it('add space in two Chinese characters', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '中文',
      },
      props: {
        autoInsertSpace: true,
      },
    })
    expect(wrapper.find('.tw-button span').text()).toBe('中文')
    expect(wrapper.find('.tw-button span').classes()).toContain(
      'tw-button__text--expand'
    )
  })
})
