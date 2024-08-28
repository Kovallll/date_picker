import { useState } from 'react'
import PropTypes from 'prop-types'

import { getCalendarDays } from '../../utils/getCalendarDays/index.js'
import { Day } from '../Day'
import { Container, WeekRow } from './styled.js'

export const DaysTable = ({ monthCount, size, ...props }) => {
    const falseArray = Array(35).fill(false)
    const [activeDays, setActiveDays] = useState(falseArray)
    const days = getCalendarDays(2024, monthCount)

    const handleClickDay = (id) => {
        const activeDay = activeDays[id - 1]
        if (activeDay) {
            const newActiveDays = falseArray
            setActiveDays(newActiveDays)
        } else {
            const newActiveDays = falseArray.slice(0, id - 1)
            newActiveDays.push(true)
            newActiveDays.push(...falseArray.slice(id))
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
                            onClick={handleClickDay}
                            isActive={activeDays[id - 1]}
                            size={size}
                        >
                            {day}
                        </Day>
                    ))}
                </WeekRow>
            ))}
        </Container>
    )
}

DaysTable.propTypes = {
    monthCount: PropTypes.number,
    size: PropTypes.string,
}
