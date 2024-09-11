import { memo, useState } from 'react'

import { Container, Text, Week } from './styled'
import { WeekBarProps } from './types'

import WeekCalendar from '@components/WeekCalendar'

const WeekBar = ({ weekDays, weekId, ...props }: WeekBarProps) => {
    const [isWeekOpen, setIsWeekOpen] = useState(false)

    const handleOpenCalendar = () => {
        setIsWeekOpen((prev) => !prev)
    }

    return (
        <Container {...props}>
            <Week onClick={handleOpenCalendar}>
                {weekDays.map((day) => (
                    <Text key={day}>{day}</Text>
                ))}
            </Week>
            {isWeekOpen && <WeekCalendar initialCurrentWeek={weekId} />}
        </Container>
    )
}

export default memo(WeekBar)
