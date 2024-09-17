import { ComponentType } from 'react'

import { WithHoliday } from './types'

import {
    defaultHoliday,
    inputDaySlashIndex,
    inputMonthSlashIndex,
} from '@constants'
import { CustomHolidays, GetHoliday, Holidays } from '@types'
import { getHolidaysData } from '@utils'

export const holidays = [
    { date: '15/03/*', holiday: 'Constitution Day' },
    {
        date: '2/04/*',
        holiday: 'Union Day of Belarus and Russia',
    },
    {
        date: '09/05/*',
        holiday: 'Victory Day',
    },
    {
        date: '03/07/*',
        holiday: 'Independence Day',
    },
    {
        date: '17/09/*',
        holiday: 'Day of People’s Unity',
    },
    {
        date: '01/01/*',
        holiday: 'New Year',
    },
    {
        date: '07/01/*',
        holiday: 'Orthodox Christmas',
    },
    {
        date: '23/02/*',
        holiday:
            'Fatherland Defenders and Armed Forces day of the Republic of Belarus',
    },
]

export const withHolidays = <T extends WithHoliday>(
    WrappedComponent: ComponentType<T>,
    holidayData: CustomHolidays[] | undefined
) => {
    const handleGetHoliday = (
        holidaysDates: Holidays[],
        day: number,
        currentMonth: number,
        dayId: string
    ): GetHoliday => {
        const holidayItem = holidaysDates.find((item) => {
            const isEveryYearHoliday =
                item?.id[0] === '*' &&
                day ===
                    Number(
                        item?.id.slice(
                            inputDaySlashIndex - 1,
                            inputDaySlashIndex + 1
                        )
                    ) &&
                currentMonth ===
                    Number(
                        item?.id.slice(
                            inputMonthSlashIndex - 1,
                            inputMonthSlashIndex + 1
                        )
                    )

            if (isEveryYearHoliday) {
                return true
            } else {
                return item?.id === dayId
            }
        })
        const isHoliday = !!holidayItem
        const holidayTitle = holidayItem?.holiday ?? defaultHoliday.holiday
        return { isHoliday, holidayTitle }
    }

    const handleGetAllHolidays = () => {
        const customHolidaysData: Holidays[] = getHolidaysData(
            holidayData ?? []
        )
        const generalHolidays = getHolidaysData(holidays)
        const holidaysData = [...generalHolidays, ...customHolidaysData]
        return holidaysData
    }

    const ComponentWithChangeStartDay = (props: T) => {
        return (
            <WrappedComponent
                handleGetHoliday={handleGetHoliday}
                handleGetAllHolidays={handleGetAllHolidays}
                {...props}
            />
        )
    }

    return ComponentWithChangeStartDay
}
