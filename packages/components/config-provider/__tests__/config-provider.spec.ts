import { h, ref, reactive, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useLocale } from '@tw-element/hooks'
import Chinese from '@tw-element/locale/lang/zh-cn'
import English from '@tw-element/locale/lang/en'
import { TwButton, TwMessage } from '@tw-element/components'
import { rAF } from '@tw-element/test-utils/tick'
import ConfigProvider from '../src/config-provider'
import type { Language } from '@tw-element/locale'

jest.useFakeTimers()

const TestComp = {
  setup() {
    const { t } = useLocale()
    return () => {
      return h('div', t('el.popconfirm.confirmButtonText'))
    }
  },
}

describe('config-provider', () => {
  describe('locale-provider', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount({
        components: {
          'el-test': TestComp,
          [ConfigProvider.name]: ConfigProvider,
        },
        setup() {
          const currentLocale = ref<Language>(English)
          const oppositeLocale = ref<Language>(Chinese)
          return {
            currentLocale,
            oppositeLocale,
            toEn() {
              currentLocale.value = English
              oppositeLocale.value = Chinese
            },
            toZh() {
              currentLocale.value = Chinese
              oppositeLocale.value = English
            },
          }
        },
        template: `
          <el-config-provider :locale="currentLocale">
            <el-test class="current-locale" />
            <el-config-provider :locale="oppositeLocale">
              <el-test class="opposite-locale" />
            </el-config-provider>
          </el-config-provider>

          <button @click="toEn" class="to-en">toEn</button>
          <button @click="toZh" class="to-zh">toZh</button>
        `,
      })
    })

    afterEach(() => {
      wrapper.unmount()
    })

    it('should provide locale properly', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
    })

    it('should reactively update the text on page', async () => {
      expect(wrapper.find('.current-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )

      await wrapper.find('.to-zh').trigger('click')

      expect(wrapper.find('.current-locale').text()).toBe(
        Chinese.el.popconfirm.confirmButtonText
      )
      expect(wrapper.find('.opposite-locale').text()).toBe(
        English.el.popconfirm.confirmButtonText
      )
    })
  })

  describe('button-config', () => {
    it('autoInsertSpace', async () => {
      const wrapper = mount({
        components: {
          [ConfigProvider.name]: ConfigProvider,
          TwButton,
        },
        setup() {
          const config = reactive({
            autoInsertSpace: true,
          })
          return {
            config,
          }
        },
        template: `
          <el-config-provider :button="config">
            <el-button>中文</el-button>
          </el-config-provider>
          <button class="toggle" @click="config.autoInsertSpace = !config.autoInsertSpace">toggle</button>
        `,
      })
      await nextTick()
      expect(
        wrapper.find('.el-button .el-button__text--expand').exists()
      ).toBeTruthy()
      await wrapper.find('.toggle').trigger('click')
      expect(
        wrapper.find('.el-button .el-button__text--expand').exists()
      ).toBeFalsy()
    })
  })

  describe('namespace-config', () => {
    it('reactive namespace', async () => {
      const wrapper = mount({
        components: {
          [ConfigProvider.name]: ConfigProvider,
          TwButton,
        },
        setup() {
          const namespace = ref()
          return {
            namespace,
          }
        },
        template: `
          <el-config-provider :namespace="namespace">
            <el-button>test str</el-button>
          </el-config-provider>
        `,
      })
      await nextTick()
      expect(wrapper.find('button').classes().join('')).toBe(
        'el-button' + 'el-button--default'
      )
      wrapper.vm.namespace = 'ep'
      await nextTick()
      expect(wrapper.find('button').classes().join('')).toBe(
        'ep-button' + 'ep-button--default'
      )
    })
  })

  describe('message-config', () => {
    it('limit the number of messages displayed at the same time', async () => {
      const wrapper = mount({
        components: {
          [ConfigProvider.name]: ConfigProvider,
          TwButton,
        },
        setup() {
          const config = reactive({
            max: 3,
          })
          const open = () => {
            TwMessage('this is a message.')
          }
          return {
            config,
            open,
          }
        },
        template: `
          <el-config-provider :message="config">
            <el-button @click="open">open</el-button>
          </el-config-provider>
        `,
      })
      await nextTick()
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(3)

      wrapper.vm.config.max = 10
      await nextTick()
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(7)
    })

    it('multiple config-provider config override', async () => {
      const wrapper = mount({
        components: {
          [ConfigProvider.name]: ConfigProvider,
          TwButton,
        },
        setup() {
          const config = reactive({
            max: 3,
          })
          const overrideConfig = reactive({
            max: 1,
          })
          const open = () => {
            TwMessage('this is a message.')
          }
          return {
            config,
            overrideConfig,
            open,
          }
        },
        template: `
          <el-config-provider :message="config">
            <el-config-provider :message="overrideConfig">
              <el-button @click="open">open</el-button>
            </el-config-provider>
          </el-config-provider>
        `,
      })
      jest.runAllTimers()
      await rAF()
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      wrapper.find('.el-button').trigger('click')
      await nextTick()
      expect(document.querySelectorAll('.el-message').length).toBe(1)
    })
  })
})
