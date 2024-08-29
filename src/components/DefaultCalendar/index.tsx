import { useState } from 'react'

import { DaysTable } from '../DaysTable'
import { MonthBar } from '../MonthBar'
import { WeekBar } from '../WeekBar'
import { Container } from './styled'

import { DefaultCalendarProps } from '@types'

export const DefaultCalendar = ({
    countOfRows = 5,
    initialYear = 2024,
    initialMonth = 1,
    ...props
}: DefaultCalendarProps) => {
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)

    const handleIncrementMonth = () => {
        if (currentMonth === 12) {
            setCurrentMonth(1)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }

    const handleDecrementMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(12)
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
