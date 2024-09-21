import { Range } from '@types'

export interface CalendarData {
    activeCellId: string | null
    secondInputDate: string | null
    firstInputDate: string | null
    range: Range
    year: number
    month: number
    weekNumber: number
}

export type Data = Partial<CalendarData>
