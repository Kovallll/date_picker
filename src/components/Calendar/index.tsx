import { createContext } from 'react'

import { CalendarProps } from './types'

import { defaultProps } from '@constants'
import { withChangeStartDay, withRange } from '@decorators'
import { HolidaysProvider } from '@providers/HolidaysProvider'
import ThemeProvider from '@providers/ThemeProvider'
import calendarCreater from '@service'

export const InputContext = createContext(false)

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear = defaultProps.defaultYear,
        initialMonth = defaultProps.defaultMonth,
        isWithInput = false,
        isWithRange,
        isWithStartSunday,
        holidaysData = [],
    } = props

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
            <InputContext.Provider value={isWithInput}>
                <HolidaysProvider data={holidaysData}>
                    <Calendar
                        initialYear={initialYear}
                        initialMonth={initialMonth}
                    />
                </HolidaysProvider>
            </InputContext.Provider>
        </ThemeProvider>
    )
}
