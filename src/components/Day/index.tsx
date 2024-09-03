import { memo } from 'react'

import { Container } from './styled.js'
import { DayProps } from './types'

const Day = (props: DayProps) => {
    const {
        children,
        $isDisabled,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        onClickDay,
        id,
        ...restProps
    } = props

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickDay(e, id)
    }

    return (
        <Container
            {...restProps}
            $isDisabled={$isDisabled}
            $isActive={$isActive}
            $isStartRange={$isStartRange}
            $isEndRange={$isEndRange}
            $inRange={$inRange}
            onClick={handleClickDay}
        >
            {children}
        </Container>
    )
}

export default memo(Day)
