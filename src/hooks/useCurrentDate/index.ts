import { useCallback, useState } from 'react'

import { countMonth, currentDate, numberBaseMonth } from '@constants'
import { getWeekNumber } from '@utils'

export const useCurrentDate = (
    initialYear: number,
    initialMonth: number,
) => {
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)
    const [weekId, setWeekId] = useState(getWeekNumber(currentDate))

    const handleChangeYear = useCallback((year: number) => {
        setYear(year)
    }, [])

    const handleChangeCurrentMonth = useCallback((currentMonth: number) => {
        setCurrentMonth(currentMonth)
    }, [])

    const handleChangeWeek = useCallback((weekId: number) => {
        setWeekId(weekId)
    }, [])

    const handleIncrementMonth = useCallback(() => {
        if (currentMonth === countMonth) {
            setCurrentMonth(numberBaseMonth)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }, [currentMonth])

    const handleDecrementMonth = useCallback(() => {
        if (currentMonth === numberBaseMonth) {
            setCurrentMonth(countMonth)
            setYear((prev) => prev - 1)
        } else setCurrentMonth((prev) => prev - 1)
    }, [currentMonth])

    return {
        year,
        currentMonth,
        weekId,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleChangeWeek,
        handleDecrementMonth,
        handleIncrementMonth,
    }
}
