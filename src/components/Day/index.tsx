import { memo } from 'react'

import { Container } from './styled'
import { DayProps } from './types'

const Day = (props: DayProps) => {
    const {
        children,
        $isDisabled,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isNewMonth,
        $isLowerThanMinDate,
        $isHigherThanMaxDate,
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
            $isHoliday={$isHoliday}
            $isNewMonth={$isNewMonth}
            $isLowerThanMinDate={$isLowerThanMinDate}
            $isHigherThanMaxDate={$isHigherThanMaxDate}
            onClick={handleClickDay}
        >
            {children}
        </Container>
    )
}

export default memo(Day)
