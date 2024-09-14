import { useContext } from 'react'

import { Container } from './styled'
import { WeekRowProps } from './types'

import Day from '@components/Day'
import {
    daysInWeek,
    inputDaySlashIndex,
    inputMonthSlashIndex,
    WeekDays,
} from '@constants'
import { HolidayContext } from '@context'
import {
    getAllCellsPrevMonths,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
} from '@utils'

export const WeekRow = (props: WeekRowProps) => {
    const {
        data,
        activeCellId,
        range,
        initialWeekDays,
        handleClickDay,
        year,
        currentMonth,
        ...restProps
    } = props
    const holidaysDates = useContext(HolidayContext)

    const SundayIndex = initialWeekDays.findIndex(
        (el) => el === WeekDays.Sunday
    )
    const SaturdayIndex = initialWeekDays.findIndex(
        (el) => el === WeekDays.Saturday
    )
    const yearId = getCountCellsPrevYears(year)
    const monthId = getAllCellsPrevMonths(year, currentMonth - 1)
    return (
        <Container {...restProps}>
            {data.map(({ id: dayId, day }, index) => {
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
                    Number(dayId) - yearId - monthId <
                        getCellsPrevMonth(year, currentMonth - 1) ||
                    Number(dayId) - yearId - monthId >
                        getCellsInMonth(year, currentMonth - 1) -
                            getCellsNextMonth(year, currentMonth - 1) -
                            1

                return (
                    <Day
                        key={dayId}
                        id={dayId}
                        onClickDay={handleClickDay}
                        $isActive={isActive}
                        $inRange={isRange}
                        $isStartRange={isStartRange}
                        $isEndRange={isEndRange}
                        $isHoliday={isHoliday}
                        $isWeekend={isWeekend}
                        $isNewMonth={isNewMonth}
                        holidayTitle={holidayTitle}
                    >
                        {day}
                    </Day>
                )
            })}
        </Container>
    )
}
