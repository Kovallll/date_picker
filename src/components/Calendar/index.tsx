import { createContext } from 'react'

import { CalendarProps } from './types'

import { defaultProps } from '@constants'
import { withRange } from '@decorators'
import ThemeProvider from '@providers/ThemeProvider'
import calendarCreater from '@service'
import { minMaxDate } from '@types'

export const InputContext = createContext(false)

export const MinMaxContext = createContext<minMaxDate>({
    minDate: '',
    maxDate: '',
})

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear = defaultProps.defaultYear,
        initialMonth = defaultProps.defaultMonth,
        isWithInput = false,
        isWithRange,
        minDate,
        maxDate,
    } = props

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }

    const minMaxDate = {
        minDate: minDate ?? '',
        maxDate: maxDate ?? '',
    }

    const Calendar = calendar.getCalendar()
    return (
        <ThemeProvider>
            <InputContext.Provider value={isWithInput}>
                <MinMaxContext.Provider value={minMaxDate}>
                    <Calendar
                        initialYear={initialYear}
                        initialMonth={initialMonth}
                    />
                </MinMaxContext.Provider>
            </InputContext.Provider>
        </ThemeProvider>
    )
}
