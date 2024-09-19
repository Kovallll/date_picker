import { CustomHolidays } from '@types'

export interface CalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isWithInput?: boolean
    initialYear?: number
    initialMonth?: number
    isWithRange?: boolean
    minDate?: string
    maxDate?: string
    isWithHoliday?: boolean
    isWithMinMax?: boolean
    isWithStartSunday?: boolean
    holidaysData?: CustomHolidays[]
}
