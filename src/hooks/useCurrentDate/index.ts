import { useState } from 'react'

import { countMonth, numberBaseMonth } from '@constants'

export const useCurrentDate = (initialMonth: number, initialYear: number) => {
    const [currentMonth, setCurrentMonth] = useState(initialMonth)
    const [year, setYear] = useState(initialYear)

    const handleChangeYear = (year: number) => {
        setYear(year)
    }

    const handleChangeCurrentMonth = (currentMonth: number) => {
        setCurrentMonth(currentMonth)
    }
    const handleIncrementMonth = () => {
        if (currentMonth === countMonth) {
            setCurrentMonth(numberBaseMonth)
            setYear((prev) => prev + 1)
        } else setCurrentMonth((prev) => prev + 1)
    }

    const handleDecrementMonth = () => {
        if (currentMonth === numberBaseMonth) {
            setCurrentMonth(countMonth)
            setYear((prev) => prev - 1)
        } else setCurrentMonth((prev) => prev - 1)
    }

    return {
        year,
        currentMonth,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleDecrementMonth,
        handleIncrementMonth,
    }
}
