import { CustomHolidays } from '@types'

export interface CalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isWithInput?: boolean
    initialYear?: number
    initialMonth?: number
    isWithRange?: boolean
    isWithHoliday?: boolean
    isWithStartSunday?: boolean
    holidaysData?: CustomHolidays[]
}
