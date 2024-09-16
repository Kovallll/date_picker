import { WeekDays } from '@constants'
import { onClickWithRange, StartDay, Todo } from '@types'

export interface DefaultCalendarProps
    extends React.ButtonHTMLAttributes<HTMLDivElement> {
    isChangeStartDay?: boolean
    isWithTodos?: boolean
    isWithRange?: boolean
    startDay?: StartDay
    onClickWithRange?: onClickWithRange
    handleChangeWeekDays?: () => WeekDays[]
    handleAddTodo: (cellId: string, data: string) => Todo[]
    handleRemoveTodo: (cellId: string, todoDataId: string) => Todo[]
    handleRemoveAllTodos: (cellId: string) => Todo[]
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
