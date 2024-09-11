export interface CalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isWithInput?: boolean
    initialYear?: number
    initialMonth?: number
    isWithRange?: boolean
    isWithStartSunday?: boolean
}
