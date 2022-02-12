import { withInstall, withNoopInstall } from '@tw-element/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export const TwTable = withInstall(Table, {
  TableColumn,
})
export default TwTable
export const TwTableColumn = withNoopInstall(TableColumn)
