import { createContext } from 'react'

import { defaultHoliday, initialProps } from '@constants'
import { Holidays } from '@types'

export const HolidayContext = createContext<Holidays[]>(defaultHoliday)

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
