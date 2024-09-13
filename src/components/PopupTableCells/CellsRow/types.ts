import { DataPopupTableCells } from '../types'

import { ChangeType } from '@types'

export interface CellsRowProps {
    data: DataPopupTableCells
    handleSelectElement: (monthId: number) => void
    changeType: ChangeType
    activeId: number
}
