import { forwardRef, memo } from 'react'

import { changeType } from './config'
import { MonthSection } from './styled'
import { MonthCalendarProps } from './types'

import PopupTableCells from '@components/PopupTableCells'
import { months } from '@constants'

const MonthCalendar = forwardRef(function MonthCalendar(
    { handleSelectMonth, month }: MonthCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    return (
        <MonthSection ref={ref}>
            <PopupTableCells
                fillData={months}
                handleSelectElement={handleSelectMonth}
                changeType={changeType}
                activeId={month}
            />
        </MonthSection>
    )
})

export default memo(MonthCalendar)
