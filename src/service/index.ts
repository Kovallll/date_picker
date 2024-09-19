import DefaultCalendar from '@components/DefaultCalendar'
import { DefaultCalendarProps } from '@components/DefaultCalendar/types'

class calendarCreater {
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

export default calendarCreater
