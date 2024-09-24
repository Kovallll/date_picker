import { DateProviderProps } from './types'

import { initialProps } from '@constants'
import { DateContext } from '@context'
import { useCurrentDate } from '@hooks'

export const DateProvider = ({
    initialYear = initialProps.year,
    initialMonth = initialProps.month,
    children,
}: DateProviderProps) => {
    const {
        year,
        currentMonth,
        weekId,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleChangeWeek,
        handleDecrementMonth,
        handleIncrementMonth,
    } = useCurrentDate(initialYear, initialMonth)

    const dateValue = {
        year: year,
        currentMonth,
        weekId,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleChangeWeek,
        handleDecrementMonth,
        handleIncrementMonth,
    }

    return (
        <DateContext.Provider value={dateValue}>
            {children}
        </DateContext.Provider>
    )
}
