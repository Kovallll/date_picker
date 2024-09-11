import { Holidays } from '@types'

export interface DayProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    holidatTitle: string | undefined
    $isHoliday: boolean
    $isWeekend: boolean
    $isActive: boolean
    $inRange: boolean
    $isStartRange: boolean
    $isEndRange: boolean
    $isNewMonth: boolean
    holidaysDates: Holidays[]
    onClickDay: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => void
}

export type DayContainerProps = Omit<
    DayProps,
    | 'onClickDay'
    | 'children'
    | 'id'
    | '$isHover'
    | 'holidatTitle'
    | 'handleChangeHover'
    | 'holidaysDates'
>
