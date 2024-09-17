import { createContext } from 'react'

import { initialProps } from '@constants'

export const DateContext = createContext({
    year: initialProps.year,
    currentMonth: initialProps.month,
    weekId: initialProps.weekId,
    handleChangeCurrentMonth: (_: number) => {},
    handleChangeYear: (_: number) => {},
    handleDecrementMonth: () => {},
    handleIncrementMonth: () => {},
    handleChangeWeek: (_: number) => {},
})

export const InputContext = createContext(false)
