import { useCallback, useState } from 'react'

import { countMonth, numberBaseMonth } from '@constants'

export const useCurrentDate = (initialMonth: number, initialYear: number) => {
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)

    const handleChangeYear = useCallback((year: number) => {
        setYear(year)
    }, [])

    const handleChangeCurrentMonth = useCallback((currentMonth: number) => {
        setCurrentMonth(currentMonth)
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
        handleChangeCurrentMonth,
        handleChangeYear,
        handleDecrementMonth,
        handleIncrementMonth,
    }
}
