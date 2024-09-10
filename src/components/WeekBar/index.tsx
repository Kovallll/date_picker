import { memo } from 'react'

import { Container, Text } from './styled'
import { WeekBarProps } from './types'

const WeekBar = ({ weekDays, ...props }: WeekBarProps) => {
    return (
        <Container {...props}>
            {weekDays.map((day) => (
                <Text key={day}>{day}</Text>
            ))}
        </Container>
    )
}

export default memo(WeekBar)
