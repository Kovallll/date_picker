import { CalendarProps } from './types'

import { withChangeStartDay, withHolidays, withRange } from '@decorators'
import { DateProvider } from '@providers/DateProvider'
import { InputProvider } from '@providers/InputProvider'
import ThemeProvider from '@providers/ThemeProvider'
import calendarCreater from '@service'
import { CustomHolidays } from '@types'

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear,
        initialMonth,
        isWithInput = false,
        isWithRange,
        isWithHoliday,
        holidaysData = [],
        isWithStartSunday = false,
    } = props

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }
    if (isWithStartSunday) {
        calendar.addFeature(withChangeStartDay)
    }
    if (isWithHoliday) {
        calendar.addFeature<CustomHolidays>(withHolidays, holidaysData)
    }
    const Calendar = calendar.getCalendar()
    return (
        <ThemeProvider>
            <DateProvider initialMonth={initialMonth} initialYear={initialYear}>
                <InputProvider isWithInput={isWithInput}>
                    <Calendar />
                </InputProvider>
            </DateProvider>
        </ThemeProvider>
    )
}
