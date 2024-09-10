import { WeekDays } from '@constants'
import { CellData, onClickCell, Range } from '@types'

export interface WeekRowProps {
    data: CellData[]
    activeCellId: string
    initialWeekDays: WeekDays[]
    range: Range
    year: number
    currentMonth: number
    handleClickDay: onClickCell
}
