import DefaultCalendar from '@components/DefaultCalendar'
import { DefaultCalendarProps } from '@components/DefaultCalendar/types'

class calendarCreater {
    private calendar: React.FC<DefaultCalendarProps>

    constructor() {
        this.calendar = DefaultCalendar
    }

    addFeature = (
        decorator: (
            calendar: React.FC<DefaultCalendarProps>
        ) => React.FC<DefaultCalendarProps>
    ) => {
        this.calendar = decorator(this.calendar)
    }

    getCalendar = () => {
        return this.calendar
    }
}

export default calendarCreater
