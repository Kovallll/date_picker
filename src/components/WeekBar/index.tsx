import { memo, useRef, useState } from 'react'

import { Container, Text, Week } from './styled'
import { WeekBarProps } from './types'

import WeekCalendar from '@components/WeekCalendar'
import { useClickOutside } from '@hooks'

const WeekBar = (props: WeekBarProps) => {
    const { weekDays, ...restProps } = props

    const [isWeekOpen, setIsWeekOpen] = useState(false)
    const calendarRef = useRef(null)

    useClickOutside(calendarRef, () => {
        setIsWeekOpen(false)
    })

    const handleOpenCalendar = () => {
        setIsWeekOpen((prev) => !prev)
    }

    return (
        <Container {...restProps}>
            <Week onClick={handleOpenCalendar}>
                {weekDays.map((day) => (
                    <Text key={day}>{day}</Text>
                ))}
            </Week>
            {isWeekOpen && (
                <WeekCalendar
                    handleOpenCalendar={handleOpenCalendar}
                    ref={calendarRef}
                />
            )}
        </Container>
    )
}

export default memo(WeekBar)
