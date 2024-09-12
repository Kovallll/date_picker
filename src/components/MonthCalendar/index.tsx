import { forwardRef, memo } from 'react'

import { changeType } from './config'
import { Container } from './styled'
import { MonthCalendarProps } from './types'

import TwelvePicker from '@components/TwelvePicker'
import { months } from '@constants'

const MonthCalendar = forwardRef(function MonthCalendar(
    { handleSelectMonth, month }: MonthCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    return (
        <Container ref={ref}>
            <TwelvePicker
                fillData={months}
                handleSelectElement={handleSelectMonth}
                changeType={changeType}
                activeId={month}
            />
        </Container>
    )
})

export default memo(MonthCalendar)
