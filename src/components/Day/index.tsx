import { memo, useState } from 'react'

import { defaultHoliday } from './config'
import { Container, Holiday, Wrap } from './styled'
import { DayProps } from './types'

import { maxLenHolidayText } from '@constants'

const Day = (props: DayProps) => {
    const {
        children,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isWeekend,
        $isNewMonth,
        holidayTitle,
        onClickDay,
        id,
        ...restProps
    } = props
    const [isHover, setIsHover] = useState(false)

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickDay(e, id)
    }
    let holiday = holidayTitle === '' ? defaultHoliday : holidayTitle
    if ((holiday?.length ?? 0) >= maxLenHolidayText) {
        holiday = holiday?.slice(0, maxLenHolidayText) + '...'
    }
    const unhover = $isActive || $isStartRange || $inRange || $isEndRange
    const showHoliday = () => {
        const isHover = !!holiday && !unhover
        setIsHover(isHover)
    }

    const handleShowHoliday = () => {
        showHoliday()
    }

    const handleHideHoliday = () => {
        setIsHover(false)
    }

    return (
        <Container
            {...restProps}
            onMouseOver={handleShowHoliday}
            onMouseLeave={handleHideHoliday}
            $isActive={$isActive}
            $isStartRange={$isStartRange}
            $isEndRange={$isEndRange}
            $inRange={$inRange}
            $isWeekend={$isWeekend}
            $isHoliday={$isHoliday}
            $isNewMonth={$isNewMonth}
            onClick={handleClickDay}
        >
            {isHover && <Holiday>{holiday}</Holiday>}
            <Wrap>{children}</Wrap>
        </Container>
    )
}

export default memo(Day)
