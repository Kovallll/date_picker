export interface DayProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    $isHoliday: boolean
    $isDisabled?: boolean
    $isActive?: boolean
    $inRange?: boolean
    $isStartRange?: boolean
    $isEndRange?: boolean
    $isNewMonth?: boolean
    $isLowerThanMinDate?: boolean
    $isHigherThanMaxDate?: boolean
    onClickDay: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => void
}

export type DayContainerProps = Omit<DayProps, 'onClickDay' | 'children' | 'id'>
