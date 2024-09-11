export interface CalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isWithInput?: boolean
    initialYear?: number
    initialMonth?: number
    isWithRange?: boolean
    minDate?: string
    maxDate?: string
    isWithStartSunday?: boolean
}
