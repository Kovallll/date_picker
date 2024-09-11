export { type Theme } from './theme'
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

