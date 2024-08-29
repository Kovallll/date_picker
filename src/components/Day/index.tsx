import { Container } from './styled.js'

import { DayProps } from '@types'

export const Day = ({
    children,
    isDisabled,
    isActive,
    inRange,
    isStartRange,
    onClickDay,
    id,
    ...props
}: DayProps) => {
    const handleClickDay = () => {
        onClickDay(id)
    }
    return (
        <Container
            {...props}
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
