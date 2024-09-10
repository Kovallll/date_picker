import { onClickWithRange } from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isChangeStartDay?: boolean
    initialYear: number
    initialMonth: number
    isWithRange?: boolean
    onClickWithRange?: onClickWithRange
}

export interface CalendarContainerProps {
    $isWithRange: boolean
    $isWithInput: boolean
}
