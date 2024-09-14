export { type Theme, type SizeStyles } from './theme'
export interface CellsInitialData {
    id: string
    data: CellData[]
}

export interface CellData {
    id: string
    day: number
}

export interface MonthCellsData {
    id: string
    data: boolean[]
}

export interface Range {
    start: number | null
    end: number | null
}
export type StartDay = 1 | 0
export interface InputRange {
    start: string
    end: string
}

export type Holidays =
    | {
          id: string
          holiday: string
      }
    | undefined

export interface CustomHolidays {
    date: string
    holiday: string
}

export interface CurrentDate {
    year: number
    setYear: (value: number) => void
    currentMonth: number
    setMonth: (value: number) => void
    handleIncrementMonth: () => void
    handleDecrementMonth: () => void
}

export type onClickWithRange = (
    ctrl: boolean,
    cellId: number,
    range: Range,
    isSecondInput?: boolean,
    inputDate?: string,
    prevFirstDate?: string,
    prevSecondDate?: string
) => { range: Range; inputRange: InputRange }

export interface ElementStyle {
    large: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
    medium: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
    small: {
        width: string
        borderRadius: string
        border: string
        [K: string]: string
    }
}
