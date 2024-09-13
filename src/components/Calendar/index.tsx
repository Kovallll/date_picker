import { CalendarProps } from './types'

import { withChangeStartDay, withRange } from '@decorators'
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
        isWithStartSunday,
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
            <DateProvider initialMonth={initialMonth} initialYear={initialYear}>
                <InputProvider isWithInput={isWithInput}>
                    <Calendar />
                </InputProvider>
            </DateProvider>
        </ThemeProvider>
    )
}
