import { CalendarProps } from './types'

import ErrorBoundary from '@components/ErrorBoundary'
import {withChangeStartDay,withHolidays,withMinMax,withRange} from '@decorators'
import { DateProvider } from '@providers/DateProvider'
import { InputProvider } from '@providers/InputProvider'
import ThemeProvider from '@providers/ThemeProvider'
import { calendarCreater } from '@service'
import { CustomHolidays, minMaxDate } from '@types'

export const Calendar = (props: CalendarProps) => {
    const {
        initialYear,
        initialMonth,
        isWithInput = false,
        isWithRange,
        minDate,
        maxDate,
        isWithHoliday,
        isWithMinMax,
        holidaysData = [],
        isWithStartSunday = false,
    } = props

    const calendar = new calendarCreater()
    if (isWithRange) {
        calendar.addFeature(withRange)
    }

    const minMaxDate = {
        minDate: minDate ?? '',
        maxDate: maxDate ?? '',
    }

    if (isWithStartSunday) {
        calendar.addFeature(withChangeStartDay)
    }
    if (isWithHoliday) {
        calendar.addFeature<CustomHolidays[]>(withHolidays, holidaysData)
    }
    if (isWithMinMax) {
        calendar.addFeature<minMaxDate>(withMinMax, minMaxDate)
    }
    const Calendar = calendar.getCalendar()
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <DateProvider
                    initialMonth={initialMonth}
                    initialYear={initialYear}
                >
                    <InputProvider isWithInput={isWithInput}>
                        <Calendar />
                    </InputProvider>
                </DateProvider>
            </ThemeProvider>
        </ErrorBoundary>
    )
}
