import { DefaultCalendar } from '../components/DefaultCalendar'
import { DefaultCalendarProps } from '../types'

class CalendarCreater {
    private calendar: React.FC<DefaultCalendarProps>

    constructor() {
        this.calendar = DefaultCalendar
    }

    addFeature = (hoc: Function) => {
        this.calendar = hoc(this.calendar)
    }

    getCalendar = () => {
        return this.calendar
    }
}

export default CalendarCreater
