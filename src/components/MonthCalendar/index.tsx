import { forwardRef, memo } from 'react'

import { Container } from './styled'
import { MonthCalendarProps } from './types'

import TwelvePicker from '@components/TwelvePicker'
import { months } from '@constants'

const MonthCalendar = forwardRef(function MonthCalendar(
    { handleSelectMonth }: MonthCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    return (
        <Container ref={ref}>
            <TwelvePicker
                fillData={months}
                handleSelectElement={handleSelectMonth}
            />
        </Container>
    )
})

export default memo(MonthCalendar)
