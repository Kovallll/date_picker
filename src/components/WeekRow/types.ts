import { WeekDays } from '@constants'
import { CellData, Range } from '@types'

export interface WeekRowProps {
    data: CellData[]
    activeCellId: string
    weekDays: WeekDays[]
    range: Range
    year: number
    currentMonth: number
    handleClickDay: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => void
}
