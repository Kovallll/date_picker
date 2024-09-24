import { DefaultCalendarProps } from '@components/DefaultCalendar/types'

export interface WithHoliday
    extends Pick<DefaultCalendarProps, 'isWithHoliday'> {}
