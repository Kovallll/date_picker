import { WeekDays } from '@constants'
import {
    CellData,
    GetHoliday,
    Holidays,
    minMaxCellDate,
    onClickCell,
    Range,
    StartDay,
} from '@types'

export interface WeekRowProps {
    data: CellData[]
    activeCellId: string
    weekDays: WeekDays[]
    range: Range
    handleClickDay: onClickCell
    firstDayIndex: number
    startDay: StartDay
    isWithTodos?: boolean
    handleGetHoliday?: (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ) => GetHoliday
    handleGetAllHolidays?: () => Holidays[]
    minMaxDate: minMaxCellDate
}
