import { onClickCell } from '@types'

export interface CellProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    $isHoliday?: boolean
    $isPopup?: boolean
    $isPopupActive?: boolean
    $isDisabled?: boolean
    $isActive?: boolean
    $inRange?: boolean
    $isStartRange?: boolean
    $isEndRange?: boolean
    $isNewMonth?: boolean
    $isSelectWeek?: boolean
    $isTodoEmpty: boolean
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
    $isEndRange?: boolean
    $isNewMonth?: boolean
    $isSelectWeek?: boolean
}
