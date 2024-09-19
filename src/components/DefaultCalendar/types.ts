import { WeekDays } from '@constants'
import {
    GetHoliday,
    Holidays,
    minMaxCellDate,
    onClickWithRange,
    StartDay,
} from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isChangeStartDay?: boolean
    isWithRange?: boolean
    startDay?: StartDay
    isWithHoliday?: boolean
    isWithMinMax?: boolean
    onClickWithRange?: onClickWithRange
    handleChangeWeekDays?: () => WeekDays[]
    handleGetHoliday?: (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ) => GetHoliday
    handleGetAllHolidays?: () => Holidays[]
    minMaxDate?: minMaxCellDate
}

export interface CalendarContainerProps {
    $isWithRange: boolean
    $isWithInput: boolean
}
