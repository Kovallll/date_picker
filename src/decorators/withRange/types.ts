import { DefaultCalendarProps } from '@components/DefaultCalendar/types'

export interface WithRangeProps
    extends Pick<DefaultCalendarProps, 'isWithRange' | 'onClickWithRange'> {}
