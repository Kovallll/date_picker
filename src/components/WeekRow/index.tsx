import { useContext, useMemo } from 'react'

import { Container } from './styled'
import { WeekRowProps } from './types'

import Cell from '@components/Cell'
import {
    daysInWeek,
    inputDaySlashIndex,
    inputMonthSlashIndex,
    WeekDays,
} from '@constants'
import { DateContext, HolidayContext } from '@context'
import {
    getAllCellsPrevMonths,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getMonthAndDaysByWeek,
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
        ...restProps
    } = props
    const holidaysDates = useContext(HolidayContext)

    const SundayIndex = useMemo(() => {
        return weekDays.findIndex((el) => el === WeekDays.Sunday)
    }, [weekDays])
    const SaturdayIndex = useMemo(() => {
        return weekDays.findIndex((el) => el === WeekDays.Saturday)
    }, [weekDays])

    const { year, currentMonth, weekId } = useContext(DateContext)

    const yearId = getCountCellsPrevYears(year)
    const monthId = getAllCellsPrevMonths(year, currentMonth - 1)

    const { days, monthStart, monthEnd } = getMonthAndDaysByWeek(year, weekId, startDay)
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

                const holidayItem = holidaysDates.find((item) => {
                    const isEveryYearHoliday =
                        item?.id[0] === '*' &&
                        day ===
                            Number(
                                item?.id.slice(
                                    inputDaySlashIndex - 1,
                                    inputDaySlashIndex + 1
                                )
                            ) &&
                        currentMonth ===
                            Number(
                                item?.id.slice(
                                    inputMonthSlashIndex - 1,
                                    inputMonthSlashIndex + 1
                                )
                            )

                    if (isEveryYearHoliday) {
                        return true
                    } else {
                        return item?.id === dayId
                    }
                })
                const isHoliday = !!holidayItem
                const holidayTitle = holidayItem?.holiday

                const isWeekend =
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
                        $isWeekend={isWeekend}
                        $isNewMonth={isNewMonth}
                        holidayTitle={holidayTitle}
                        $isSelectWeek={isSelectWeek}
                    >
                        {day}
                    </Cell>
                )
            })}
        </Container>
    )
}
