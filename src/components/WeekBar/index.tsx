import { memo } from 'react'

import { Container, Text } from './styled'
import { WeekBarProps } from './types'

import { initialWeekDays } from '@constants'

const WeekBar = ({ ...props }: WeekBarProps) => {
    return (
        <Container {...props}>
            {initialWeekDays.map((day) => (
                <Text key={day}>{day}</Text>
            ))}
        </Container>
    )
}

export default memo(WeekBar)
