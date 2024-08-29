export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    countOfRows?: number
    initialYear?: number
    initialMonth?: number
}

export interface DayProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string
    children: React.ReactNode
    isDisabled?: boolean
    isActive?: boolean
    inRange?: boolean
    isStartRange?: boolean
    onClickDay: (id: string) => void
}

export type DayContainerProps = Omit<DayProps, 'onClickDay' | 'children' | 'id'>

export interface MonthBarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    increment: () => void
    decrement: () => void
}

export type WeekBarProps = React.ButtonHTMLAttributes<HTMLDivElement>

export interface DaysTableProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    countOfRows: number
    year: number
}

export interface SizeProviderProps {
    children: React.ReactNode
}
