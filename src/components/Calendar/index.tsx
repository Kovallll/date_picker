import { CalendarProps } from './types'

import { withChangeStartDay, withRange, withTodos } from '@decorators'
import { DateProvider } from '@providers/DateProvider'
import { InputProvider } from '@providers/InputProvider'
import ThemeProvider from '@providers/ThemeProvider'
import calendarCreater from '@service'

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear,
        initialMonth,
        isWithInput = false,
        isWithRange,
        isWithStartSunday = false,
        isWithTodos,
    } = props

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }
    if (isWithStartSunday) {
        calendar.addFeature(withChangeStartDay)
    }
    if (isWithTodos) {
        calendar.addFeature(withTodos)
    }

    const Calendar = calendar.getCalendar()
    return (
        <ThemeProvider>
            <DateProvider
                initialMonth={initialMonth}
                initialYear={initialYear}
                isWithStartSunday={isWithStartSunday}
            >
                <InputProvider isWithInput={isWithInput}>
                    <Calendar />
                </InputProvider>
            </DateProvider>
        </ThemeProvider>
    )
}
