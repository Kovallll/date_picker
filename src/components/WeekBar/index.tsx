import { Container, Text } from './styled.js'

import { weekDays } from '@constants'
import { WeekBarProps } from '@types'

export const WeekBar = ({ ...props }: WeekBarProps) => {
    return (
        <Container {...props}>
            {weekDays.map((day) => (
                <Text>{day}</Text>
            ))}
        </Container>
    )
}
