import { useContext } from 'react'

import { Container } from './styled'
import { WeekRowProps } from './types'

import { MinMaxContext } from '@components/Calendar'
import Day from '@components/Day'
import { daysInWeek, WeekDays } from '@constants'
import {
    getAllCellsPrevMonths,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getValidInputCell,
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
    const { minDate, maxDate } = useContext(MinMaxContext)
    const { inputCellId: minDateCellId } = getValidInputCell(minDate)
    const { inputCellId: maxDateCellId } = getValidInputCell(maxDate)
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
                const isHoliday =
                    index % daysInWeek === SundayIndex ||
                    index % daysInWeek === SaturdayIndex
                const isLowerThanMinDate = Number.isNaN(Number(minDateCellId))
                    ? false
                    : Number(minDateCellId) > Number(dayId)
                const isHigherThanMaxDate = Number.isNaN(Number(maxDateCellId))
                    ? false
                    : Number(maxDateCellId) < Number(dayId)
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
                        $isNewMonth={isNewMonth}
                        $isLowerThanMinDate={isLowerThanMinDate}
                        $isHigherThanMaxDate={isHigherThanMaxDate}
                    >
                        {day}
                    </Day>
                )
            })}
        </Container>
    )
}
