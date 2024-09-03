export interface DayProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    $isDisabled?: boolean
    $isActive?: boolean
    $inRange?: boolean
    $isStartRange?: boolean
    $isEndRange?: boolean
    onClickDay: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => void
}

export type DayContainerProps = Omit<DayProps, 'onClickDay' | 'children' | 'id'>
