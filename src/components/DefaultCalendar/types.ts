import { onClickWithRange } from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    initialYear: number
    initialMonth: number
    isWithRange?: boolean
    onClickWithRange?: onClickWithRange
}

export interface CalendarContainerProps {
    $isWithRange: boolean
    $isWithInput: boolean
}
