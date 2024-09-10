import { memo } from 'react'

import { Container } from './styled'
import { DayProps } from './types'

const Cell = (props: DayProps) => {
    const {
        children,
        $isTwelve,
        $isDisabled,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isNewMonth,
        onClickCell,
        id,
        ...restProps
    } = props

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickCell(e, id)
    }

    return (
        <Container
            {...restProps}
            $isTwelve={$isTwelve}
            $isDisabled={$isDisabled}
            $isActive={$isActive}
            $isStartRange={$isStartRange}
            $isEndRange={$isEndRange}
            $inRange={$inRange}
            $isHoliday={$isHoliday}
            $isNewMonth={$isNewMonth}
            onClick={handleClickDay}
        >
            {children}
        </Container>
    )
}

export default memo(Cell)
