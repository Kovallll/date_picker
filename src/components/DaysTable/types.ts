import { WeekDays } from '@constants'
import { onClickWithRange, Range } from '@types'

export interface DaysTableProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    handleChangeError: (error: string) => void
    initialWeekDays: WeekDays[]
    isKeyboardChange: boolean
    isWithRange?: boolean
    handleKeyboardChange: (isKeyboard: boolean) => void
    onClickWithRange?: onClickWithRange
    handleChangeYear: (year: number) => void
    handleDecrementMonth: () => void
    handleIncrementMonth: () => void
    handleChangeCurrentMonth: (value: number) => void
    firstInputDate: string
    secondInputDate: string
    handleChangeFirstDateInput: (date: string) => void
    handleChangeSecondDateInput: (date: string) => void
}

export type ClickNextMonthCell = Pick<
    DaysTableProps,
    | 'handleChangeFirstDateInput'
    | 'handleChangeSecondDateInput'
    | 'onClickWithRange'
    | 'firstInputDate'
    | 'secondInputDate'
> & {
    cellId: number
    ctrl: boolean
    inputDate: string
    handleSetActiveCellId: (id: string) => void
    isRange: boolean
    range: Range
    handleSetRange: (range: Range) => void
    setPrevFirstDate: (date: string) => void
    setPrevSecondDate: (date: string) => void
    prevFirstDate: string
    prevSecondDate: string
    isWithInput: boolean
}

export type ClickPrevMonthCell = ClickNextMonthCell
