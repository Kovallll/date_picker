import { useState } from 'react'

import { DaysTable } from '../DaysTable'
import { MonthBar } from '../MonthBar'
import { WeekBar } from '../WeekBar'
import { Container } from './styled'

import { defaultProps, maxMonths, minMonth } from '/src/constants'
import { DefaultCalendarProps } from '@types'

export const DefaultCalendar = ({
    countOfRows = defaultProps.defaultCountOfRows,
    initialYear = defaultProps.defaultYear,
    initialMonth = defaultProps.defaultMonth,
    ...props
}: DefaultCalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)

    const handleIncrementMonth = () => {
        if (currentMonth === maxMonths) {
            setCurrentMonth(minMonth)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }

    const handleDecrementMonth = () => {
        if (currentMonth === minMonth) {
            setCurrentMonth(maxMonths)
            setYear((prev) => prev - 1)
        } else setCurrentMonth((prev) => prev - 1)
    }

    return (
        <Container {...props}>
            <MonthBar
                year={year}
                currentMonth={currentMonth}
                increment={handleIncrementMonth}
                decrement={handleDecrementMonth}
            />
            <WeekBar />
            <DaysTable
                year={year}
                countOfRows={countOfRows}
                currentMonth={currentMonth}
            />
        </Container>
    )
}
