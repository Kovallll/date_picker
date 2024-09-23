export { type Theme, type ElementStyle, type SizeStyles } from './theme'
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

export interface minMaxDate {
    minDate: string
    maxDate: string
}

export interface minMaxCellDate {
    minDate: string
    maxDate: string
    minDateCellId: number
    maxDateCellId: number
    minMonth: number
    maxMonth: number
    minYear: number
    maxYear: number
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
export type ChangeType = 'year' | 'month' | 'week'

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

export type onClickCell = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
) => void

export type InitialCells = (
    | string
    | {
          id: string
          data: never[]
      }
)[]

export interface Todo {
    id: string
    data: TodoData[]
}

export interface TodoData {
    id: string
    data: string
    checked: boolean
}

export interface GetHoliday {
    isHoliday: boolean
    holidayTitle: string
}
