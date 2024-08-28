import PropTypes from 'prop-types'

import { months, yearNow } from '../../constants/index.js'
import { Container, Image, Month } from './styled.js'

import nextIcon from '@/assets/icons/next.svg'
import prevIcon from '@/assets/icons/prev.svg'

export const MonthBar = ({ size, monthCount, ...props }) => {
    return (
        <Container size={size} {...props}>
            <Image size={size} src={prevIcon} />
            <Month>
                {months[monthCount]} {yearNow}
            </Month>
            <Image size={size} src={nextIcon} />
        </Container>
    )
}

MonthBar.propTypes = {
    size: PropTypes.string,
    monthCount: PropTypes.number,
}
