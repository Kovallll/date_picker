import { useState } from 'react'

import { Day } from '../Day/index.jsx'
import { Container, WeekRow } from './styled.js'

import { falseArray } from '@constants'
import { DaysTableProps } from '@types'
import { getCalendarDays } from '@utils/getCalendarDays/index.js'

export const DaysTable = ({ currentMonth, year, ...props }: DaysTableProps) => {
    const [activeDays, setActiveDays] = useState(falseArray)
    const days = getCalendarDays(year, currentMonth - 1)
    const handleClickDay = (id: string) => {
        const activeDay = activeDays[Number(id) - 1]
        if (activeDay) {
            const newActiveDays = falseArray
            setActiveDays(newActiveDays)
        } else {
            const newActiveDays = falseArray.slice(0, Number(id) - 1)
            newActiveDays.push(true)
            newActiveDays.push(...falseArray.slice(Number(id)))
            setActiveDays(newActiveDays)
        }
    }

    return (
        <Container {...props}>
            {days.map(({ data, id }) => (
                <WeekRow key={id}>
                    {data.map(({ id, day }) => (
                        <Day
                            key={id}
                            id={id}
                            onClickDay={handleClickDay}
                            isActive={activeDays[Number(id) - 1]}
                        >
                            {day}
                        </Day>
                    ))}
                </WeekRow>
            ))}
        </Container>
    )
}
