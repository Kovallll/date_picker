import { WeekDays } from '@constants'
import { onClickWithRange } from '@types'

export interface DaysTableProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    currentMonth: number
    year: number
    handleChangeError: (error: string) => void
    error: string
    initialWeekDays: WeekDays[]
    isKeyboardChange: boolean
    isWithRange?: boolean
    handleKeyboardChange: (isKeyboard: boolean) => void
    handleChangeYear: (year: number) => void
    handleDecrementMonth: () => void
    handleIncrementMonth: () => void
    handleChangeCurrentMonth: (value: number) => void
    onClickWithRange?: onClickWithRange
    firstInputDate: string
    secondInputDate: string
    handleChangeFirstDateInput: (value: string) => void
    handleChangeSecondDateInput: (value: string) => void
}
