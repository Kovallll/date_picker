import { withRange } from '@decorators'
import calendarCreater from '@service'

export const CalendarWithRange = ({ ...props }) => {
    const calendar = new calendarCreater()
    calendar.addFeature(withRange)
    const RangeCalendar = calendar.getCalendar()

    return <RangeCalendar {...props} />
}
