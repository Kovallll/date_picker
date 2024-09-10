import { onClickCell } from '@types'

export interface DayProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    $isHoliday?: boolean
    $isTwelve?: boolean
    $isDisabled?: boolean
    $isActive?: boolean
    $inRange?: boolean
    $isStartRange?: boolean
    $isEndRange?: boolean
    $isNewMonth?: boolean
    onClickCell: onClickCell
}

export type DayContainerProps = Omit<
    DayProps,
    'onClickCell' | 'children' | 'id'
>
