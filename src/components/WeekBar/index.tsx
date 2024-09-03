import { memo } from 'react'

import { Container, Text } from './styled.js'
import { WeekBarProps } from './types'

import { weekDays } from '@constants'

const WeekBar = ({ ...props }: WeekBarProps) => {
    return (
        <Container {...props}>
            {weekDays.map((day) => (
                <Text key={day}>{day}</Text>
            ))}
        </Container>
    )
}

export default memo(WeekBar)
