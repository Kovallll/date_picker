import { createContext } from 'react'

import { initialProps } from '@constants'

export const DateContext = createContext({
    year: initialProps.year,
    currentMonth: initialProps.month,
    weekId: initialProps.weekId,
    handleChangeCurrentMonth: (value: number) => {
        return value
    },
    handleChangeYear: (year: number) => {
        return year
    },
    handleDecrementMonth: () => {},
    handleIncrementMonth: () => {},
    handleChangeWeek: (weekId: number) => {
        return weekId
    },
})

export const InputContext = createContext(false)
