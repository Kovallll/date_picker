import { DefaultCalendarProps } from '/src/components/DefaultCalendar/types'

export interface WithChangeStartDay
    extends Pick<DefaultCalendarProps, 'isChangeStartDay'> {}
