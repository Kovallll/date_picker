import PropTypes from 'prop-types'

import { Container, Text } from './styled.js'

import { weekDays } from '@/constants'

export const WeekBar = ({ size, ...props }) => {
    return (
        <Container size={size} {...props}>
            {weekDays.map((day) => (
                <Text>{day}</Text>
            ))}
        </Container>
    )
}

WeekBar.propTypes = {
    size: PropTypes.string,
}
