import { CalendarData, Data } from './types'

import DefaultCalendar from '@components/DefaultCalendar'
import { DefaultCalendarProps } from '@components/DefaultCalendar/types'
import { initialProps } from '@constants'

export class calendarCreater {
    private calendar: React.FC<DefaultCalendarProps>

    constructor() {
        this.calendar = DefaultCalendar
    }

    addFeature = <T>(
        decorator: (
            calendar: React.FC<DefaultCalendarProps>,
            data?: T
        ) => React.FC<DefaultCalendarProps>,
        data?: T
    ) => {
        this.calendar = decorator(this.calendar, data)
    }

    getCalendar = () => {
        return this.calendar
    }
}

export class calendarInfo {
    private calendarData: CalendarData

    constructor() {
        this.calendarData = {
            activeCellId: null,
            secondInputDate: null,
            firstInputDate: null,
            range: { start: null, end: null },
            year: initialProps.year,
            month: initialProps.month,
            weekNumber: initialProps.weekId,
        }
    }

    updateData(data: Data) {
        this.calendarData = { ...this.calendarData, ...data }
    }

    getData() {
        return this.calendarData
    }
}
