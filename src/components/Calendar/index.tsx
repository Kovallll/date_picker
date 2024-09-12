import { createContext } from 'react'

import { CalendarProps } from './types'

import { currentDate } from '@constants'
import { withChangeStartDay, withRange } from '@decorators'
import { useCurrentDate } from '@hooks'
import ThemeProvider from '@providers/ThemeProvider'
import calendarCreater from '@service'
import { getWeekNumber } from '@utils'

export const InputContext = createContext(false)

const currentYear = new Date().getFullYear()
const month = new Date().getMonth() + 1
const weekId = getWeekNumber(currentDate)

export const DateContext = createContext({
    year: currentYear,
    currentMonth: month,
    weekId: weekId,
    handleChangeCurrentMonth: (value: number) => {
        console.log(value)
    },
    handleChangeYear: (year: number) => {
        console.log(year)
    },
    handleDecrementMonth: () => {},
    handleIncrementMonth: () => {},
    handleChangeWeek: (weekId: number) => {
        console.log(weekId)
    },
})

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear = currentYear,
        initialMonth = month,
        isWithInput = false,
        isWithRange,
        isWithStartSunday,
    } = props

    const {
        year,
        currentMonth,
        weekId,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleChangeWeek,
        handleDecrementMonth,
        handleIncrementMonth,
    } = useCurrentDate(initialYear, initialMonth)

    const dateValue = {
        year: year,
        currentMonth,
        weekId,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleChangeWeek,
        handleDecrementMonth,
        handleIncrementMonth,
    }

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }
    if (isWithStartSunday) {
        calendar.addFeature(withChangeStartDay)
    }
    const Calendar = calendar.getCalendar()
    return (
        <ThemeProvider>
            <DateContext.Provider value={dateValue}>
                <InputContext.Provider value={isWithInput}>
                    <Calendar
                        initialYear={initialYear}
                        initialMonth={initialMonth}
                    />
                </InputContext.Provider>
            </DateContext.Provider>
        </ThemeProvider>
    )
}
