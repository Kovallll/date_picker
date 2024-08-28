import PropTypes from 'prop-types'

import { Container } from './styled.js'

export const Day = ({
    children,
    size,
    isDisabled,
    isActive,
    inRange,
    isStartRange,
    onClick,
    id,
    ...props
}) => {
    const handleClickDay = () => {
        onClick(id)
    }

    return (
        <Container
            {...props}
            size={size}
            isDisabled={isDisabled}
            isActive={isActive}
            isStartRange={isStartRange}
            inRange={inRange}
            onClick={handleClickDay}
        >
            {children}
        </Container>
    )
}

Day.propTypes = {
    children: PropTypes.children,
    isActive: PropTypes.bool,
    inRange: PropTypes.bool,
    isStartRange: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
}
