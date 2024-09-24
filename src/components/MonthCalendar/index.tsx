import { memo } from 'react'

import { changeType } from './config'
import { MonthSection } from './styled'
import { MonthCalendarProps } from './types'

import PopupTableCells from '@components/PopupTableCells'
import { months } from '@constants'

const MonthCalendar = ({ handleSelectMonth, month }: MonthCalendarProps) => {
    return (
        <MonthSection>
            <PopupTableCells
                fillData={months}
                handleSelectElement={handleSelectMonth}
                changeType={changeType}
                activeId={month}
            />
        </MonthSection>
    )
}

export default memo(MonthCalendar)
