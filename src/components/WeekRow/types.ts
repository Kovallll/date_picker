import { WeekDays } from '@constants'
import { CellData, onClickCell, Range, StartDay } from '@types'

export interface WeekRowProps {
    data: CellData[]
    activeCellId: string
    weekDays: WeekDays[]
    range: Range
    handleClickDay: onClickCell
    firstDayIndex: number
    startDay: StartDay
}
