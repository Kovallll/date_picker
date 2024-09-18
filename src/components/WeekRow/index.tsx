import { useContext, useMemo } from 'react'

import { Container } from './styled'
import { WeekRowProps } from './types'

import Cell from '@components/Cell'
import { daysInWeek, todosKey, WeekDays } from '@constants'
import { DateContext } from '@context'
import {
    getAllCellsPrevMonths,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getMonthAndDaysByWeek,
    LocalStorage,
} from '@utils'

export const WeekRow = (props: WeekRowProps) => {
    const {
        data,
        activeCellId,
        range,
        weekDays,
        handleClickDay,
        firstDayIndex,
        startDay,
        isWithTodos,
        ...restProps
    } = props
    const localStorage = new LocalStorage()
    const allTodos = localStorage.getItem(todosKey, [])
    const getIsWithTodo = (id: string) => {
        return !!allTodos.find((todo) => todo.id === id)
    }

    const SundayIndex = useMemo(() => {
        return weekDays.findIndex((el) => el === WeekDays.Sunday)
    }, [weekDays])
    const SaturdayIndex = useMemo(() => {
        return weekDays.findIndex((el) => el === WeekDays.Saturday)
    }, [weekDays])

    const { year, currentMonth, weekId } = useContext(DateContext)

    const yearId = getCountCellsPrevYears(year)
    const monthId = getAllCellsPrevMonths(year, currentMonth - 1)

    const { days, monthStart, monthEnd } = getMonthAndDaysByWeek(year, weekId)
    const corectDay = startDay ? 1 : 2

    const newDays = useMemo(() => {
        return days.map((el) => el + firstDayIndex - corectDay)
    }, [days, firstDayIndex, corectDay])

    const cellsInMonth = getCellsInMonth(year, currentMonth - 1)
    const cellsPrevMonth = getCellsPrevMonth(year, currentMonth - 1)
    const cellsNextMonth = getCellsNextMonth(year, currentMonth - 1)

    const isPrevMonths =
        monthStart === currentMonth - 1 && monthEnd === currentMonth
    const isCurrentMonths =
        monthStart === currentMonth && monthEnd === currentMonth
    const isNextMonths =
        monthEnd === currentMonth + 1 && monthStart === currentMonth

    return (
        <Container {...restProps}>
            {data.map(({ id: dayId, day }, index) => {
                const id = +dayId - yearId - monthId

                const isActive = activeCellId === dayId && range.start === null
                const isRange =
                    Number(dayId) > (range.start ?? Number(dayId)) &&
                    (range.end ?? Number(dayId)) > Number(dayId)
                const isStartRange = range.start === Number(dayId)
                const isEndRange = range.end === Number(dayId)

                const isHoliday =
                    index % daysInWeek === SundayIndex ||
                    index % daysInWeek === SaturdayIndex
                const isNewMonth =
                    Number(dayId) - yearId - monthId < cellsPrevMonth ||
                    Number(dayId) - yearId - monthId >
                        cellsInMonth - cellsNextMonth - 1

                const isPrev = isPrevMonths && id < daysInWeek
                const isCurrent = isCurrentMonths && newDays.includes(id)
                const isNext = isNextMonths && id >= cellsInMonth - daysInWeek
                const isSelectWeek = isPrev || isCurrent || isNext

                const isWithTodo = isWithTodos ? getIsWithTodo(dayId) : false
                return (
                    <Cell
                        key={dayId}
                        id={dayId}
                        onClickCell={handleClickDay}
                        $isActive={isActive}
                        $inRange={isRange}
                        $isStartRange={isStartRange}
                        $isEndRange={isEndRange}
                        $isHoliday={isHoliday}
                        $isNewMonth={isNewMonth}
                        $isSelectWeek={isSelectWeek}
                        $isWithTodo={isWithTodo}
                    >
                        {day}
                    </Cell>
                )
            })}
        </Container>
    )
}
