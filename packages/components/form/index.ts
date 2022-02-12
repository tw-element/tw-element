import { withInstall, withNoopInstall } from '@tw-element/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const TwForm = withInstall(Form, {
  FormItem,
})

export default TwForm

export const TwFormItem = withNoopInstall(FormItem)
