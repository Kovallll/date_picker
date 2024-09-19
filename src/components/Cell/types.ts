import { onClickCell } from '@types'

export interface CellProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    holidayTitle: string
    $isHoliday: boolean
    $isPopup?: boolean
    $isPopupActive?: boolean
    $isActive: boolean
    $inRange: boolean
    $isStartRange: boolean
    $isEndRange: boolean
    $isWeekend: boolean
    $isNewMonth: boolean
    $isSelectWeek: boolean
    $isLowerThanMinDate?: boolean
    $isHigherThanMaxDate?: boolean
    onClickCell: onClickCell
}

export interface CellDataProps {
    $isHoliday?: boolean
    $isPopup?: boolean
    $isPopupActive?: boolean
    $isDisabled?: boolean
    $isActive?: boolean
    $inRange?: boolean
    $isStartRange?: boolean
    $isWeekend?: boolean
    $isEndRange?: boolean
    $isNewMonth?: boolean
    $isSelectWeek?: boolean
    $isLowerThanMinDate?: boolean
    $isHigherThanMaxDate?: boolean
}
