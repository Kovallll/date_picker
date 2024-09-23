import { WeekDays } from '@constants'
import {
    GetHoliday,
    Holidays,
    minMaxCellDate,
    onClickWithRange,
    StartDay,
    Todo,
    TodoData,
} from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isChangeStartDay?: boolean
    isWithTodos?: boolean
    isWithRange?: boolean
    startDay?: StartDay
    isWithHoliday?: boolean
    isWithMinMax?: boolean
    onClickWithRange?: onClickWithRange
    handleChangeWeekDays?: () => WeekDays[]
    handleAddTodo?: (cellId: string, data: string) => Todo[]
    handleRemoveTodo?: (cellId: string, todoDataId: string) => Todo[]
    handleRemoveAllTodos?: (cellId: string) => Todo[]
    handleUpdateTodo?: (todoId: string, todo: TodoData) => void
    handleGetHoliday?: (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ) => GetHoliday
    handleGetAllHolidays?: () => Holidays[]
    minMaxDate?: minMaxCellDate
}

export interface CalendarContainerProps {
    $isWithRange: boolean
    $isWithInput: boolean
}

export interface CalendarArticleProps {
    $isWithTodos?: boolean
}

export interface TodoButtonProps {
    $isDisabled: boolean
}
