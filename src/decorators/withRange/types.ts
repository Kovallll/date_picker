import { DefaultCalendarProps } from '/src/components/DefaultCalendar/types'

export interface WithRangeProps
    extends Pick<DefaultCalendarProps, 'isWithRange' | 'onClickWithRange'> {}
