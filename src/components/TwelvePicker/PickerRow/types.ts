import { DataTwelveTable } from '../types'

import { ChangeType } from '@types'

export interface TableRowProps {
    data: DataTwelveTable
    handleSelectElement: (monthId: number) => void
    changeType: ChangeType
    activeId: number
}
