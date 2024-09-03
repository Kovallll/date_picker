import { useEffect, useState } from 'react'

import { Container } from './styled'
import { DefaultCalendarProps } from './types'

import { DaysTable } from '@components/DaysTable'
import { MonthBar } from '@components/MonthBar'
import WeekBar from '@components/WeekBar'
import {
    countMonth,
    defaultProps,
    initialWeekDays,
    numberBaseMonth,
} from '@constants'

export const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        initialYear = defaultProps.defaultYear,
        initialMonth = defaultProps.defaultMonth,
        isChangeStartDay,
        isWithRange,
        onClickWithRange,
        ...restProps
    } = props

    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    const [weekDays, setWeekDays] = useState(initialWeekDays)

    useEffect(() => {
        if (isChangeStartDay) {
            const sunday = initialWeekDays.slice(initialWeekDays.length - 1)
            const withOutSunday = initialWeekDays.slice(
                0,
                initialWeekDays.length - 1
            )
            const newWeekDays = [...sunday, ...withOutSunday]
            setWeekDays(newWeekDays)
        }
    }, [isChangeStartDay])

    const handleIncrementMonth = () => {
        if (currentMonth === countMonth) {
            setCurrentMonth(numberBaseMonth)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }

    const handleDecrementMonth = () => {
        if (currentMonth === numberBaseMonth) {
            setCurrentMonth(countMonth)
            setYear((prev) => prev - 1)
        } else setCurrentMonth((prev) => prev - 1)
    }
    const startDay = weekDays[0] === 'Mo' ? 1 : 0
    return (
        <Container {...restProps}>
            <MonthBar
                year={year}
                currentMonth={currentMonth}
                increment={handleIncrementMonth}
                decrement={handleDecrementMonth}
            />
            <WeekBar weekDays={weekDays} />
            <DaysTable
                isWithRange={isWithRange}
                onClickWithRange={onClickWithRange}
                year={year}
                currentMonth={currentMonth}
                startDay={startDay}
            />
        </Container>
    )
}
