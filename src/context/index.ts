import { createContext } from 'react'

import { defaultHoliday } from '@constants'
import { Holidays } from '@types'

export const HolidayContext = createContext<Holidays[]>(defaultHoliday)
