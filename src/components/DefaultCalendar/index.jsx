import { useState } from 'react'
import PropTypes from 'prop-types'

import { DaysTable } from '../DaysTable'
import { MonthBar } from '../MonthBar'
import { WeekBar } from '../WeekBar'
import { Container } from './styled'

export const DefaultCalendar = ({ size, ...props }) => {
    const [monthCount, setMonthCount] = useState(0)

    return (
        <Container {...props} size={size}>
            <MonthBar size={size} monthCount={monthCount} />
            <WeekBar size={size} />
            <DaysTable monthCount={monthCount} size={size} />
        </Container>
    )
}

DefaultCalendar.propTypes = {
    size: PropTypes.string,
}
