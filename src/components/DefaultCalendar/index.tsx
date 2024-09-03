import { useState } from 'react'

import { Container } from './styled'
import { DefaultCalendarProps } from './types'

import { DaysTable } from '@components/DaysTable'
import { MonthBar } from '@components/MonthBar'
import WeekBar from '@components/WeekBar'
import { countMonth, defaultProps, numberBaseMonth } from '@constants'

export const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        initialYear = defaultProps.defaultYear,
        initialMonth = defaultProps.defaultMonth,
        isWithRange,
        onClickWithRange,
        ...restProps
    } = props

    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)

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

    return (
        <Container {...restProps}>
            <MonthBar
                year={year}
                currentMonth={currentMonth}
                increment={handleIncrementMonth}
                decrement={handleDecrementMonth}
            />
            <WeekBar />
            <DaysTable
                isWithRange={isWithRange}
                onClickWithRange={onClickWithRange}
                year={year}
                currentMonth={currentMonth}
            />
        </Container>
    )
}
