import { Calendar } from '@components/Calendar'
import { calendarInfo } from '@service'

const calendarData = new calendarInfo().getData()

export { Calendar, calendarData }
