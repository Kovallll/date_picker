import { ChangeType } from '@types'

export interface TwelveTableProps {
    fillData: string[]
    handleSelectElement: (monthId: number) => void
    changeType: ChangeType
    activeId: number
}

export type DataTwelveTable = ArrayTwelveTable[]

export interface ArrayTwelveTable {
    id: string
    data: string
}
