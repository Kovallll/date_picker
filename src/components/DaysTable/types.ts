import { WeekDays } from '@constants'
import { calendarInfo } from '@service'
import {
    GetHoliday,
    Holidays,
    minMaxCellDate,
    onClickWithRange,
    Range,
    StartDay,
} from '@types'

export interface DaysTableProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    startDay: StartDay
    handleChangeError: (error: string) => void
    weekDays: WeekDays[]
    isKeyboardChange: boolean
    isWithRange?: boolean
    handleKeyboardChange: (isKeyboard: boolean) => void
    onClickWithRange?: onClickWithRange
    firstInputDate: string
    secondInputDate: string
    handleChangeFirstDateInput: (date: string) => void
    handleChangeSecondDateInput: (date: string) => void
    activeCellId: string
    handleChangeActiveCellId: (id: string) => void
    isWithTodos?: boolean
    handleGetHoliday?: (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ) => GetHoliday
    handleGetAllHolidays?: () => Holidays[]
    minMaxDate?: minMaxCellDate
    calendarData: calendarInfo
}

export type ClickNextMonthCell = Pick<
    DaysTableProps,
    | 'handleChangeFirstDateInput'
    | 'handleChangeSecondDateInput'
    | 'onClickWithRange'
    | 'firstInputDate'
    | 'secondInputDate'
> & {
    cellId: number
    ctrl: boolean
    inputDate: string
    handleSetActiveCellId: (id: string) => void
    isRange: boolean
    range: Range
    handleSetRange: (range: Range) => void
    setPrevFirstDate: (date: string) => void
    setPrevSecondDate: (date: string) => void
    prevFirstDate: string
    prevSecondDate: string
    isWithInput: boolean
}

export type ClickPrevMonthCell = ClickNextMonthCell
