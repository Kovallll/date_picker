import { WeekDays } from '@constants'
import { onClickWithRange, StartDay } from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isChangeStartDay?: boolean
    initialYear: number
    initialMonth: number
    isWithRange?: boolean
    startDay?: StartDay
    onClickWithRange?: onClickWithRange
    handleChangeWeekDays?: () => WeekDays[]
}

export interface CalendarContainerProps {
    $isWithRange: boolean
    $isWithInput: boolean
}
