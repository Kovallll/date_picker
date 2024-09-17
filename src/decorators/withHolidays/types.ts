import { DefaultCalendarProps } from '/src/components/DefaultCalendar/types'

export interface WithHoliday
    extends Pick<DefaultCalendarProps, 'isWithHoliday'> {}
