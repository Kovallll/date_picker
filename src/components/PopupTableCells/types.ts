import { ChangeType } from '@types'

export interface PopupTableCellsProps {
    fillData: string[]
    handleSelectElement: (monthId: number) => void
    changeType: ChangeType
    activeId: number
}

export type DataPopupTableCells = PopupCellData[]

export interface PopupCellData {
    id: string
    data: string | never[]
}
