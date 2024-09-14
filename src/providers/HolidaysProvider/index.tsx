import { HolidaysProviderProps } from './types'

import { holidays } from '@constants'
import { HolidayContext } from '@context'
import { Holidays } from '@types'
import { getHolidaysData } from '@utils'

export const HolidaysProvider = ({ data, children }: HolidaysProviderProps) => {
    const customHolidaysData: Holidays[] = getHolidaysData(data)
    const generalHolidays = getHolidaysData(holidays)
    const holidaysData = [...generalHolidays, ...customHolidaysData]
    return (
        <HolidayContext.Provider value={holidaysData}>
            {children}
        </HolidayContext.Provider>
    )
}
