import { withChangeStartDay } from '@decorators'
import calendarCreater from '@service'

export const CalendarWithChangeStartDay = ({ ...props }) => {
    const calendar = new calendarCreater()
    calendar.addFeature(withChangeStartDay)
    const ChangeStartDayCalendar = calendar.getCalendar()

    return <ChangeStartDayCalendar {...props} />
}
