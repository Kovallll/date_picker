import { WeekDays } from '@constants'
import {
    CellData,
    GetHoliday,
    Holidays,
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
    handleGetHoliday?: (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ) => GetHoliday
    handleGetAllHolidays?: () => Holidays[]
}
