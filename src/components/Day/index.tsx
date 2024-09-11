import { memo, useState } from 'react'

import { Container, Holiday, Wrap } from './styled'
import { DayProps } from './types'

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
        holidatTitle,
        holidaysDates,
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
    const unhover = $isActive || $isStartRange || $inRange || $isEndRange
    const showHoliday = (cellId: number) => {
        const isHover =
            !!holidaysDates.find(({ id }) => cellId === Number(id)) && !unhover

        setIsHover(isHover)
    }

    const handleShowHoliday = () => {
        showHoliday(Number(id))
    }

    const handleHideHoliday = () => {
        setIsHover(false)
    }
    console.log(isHover, 'isHover')
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
            {isHover && <Holiday>{holidatTitle ?? 'Some holiday'}</Holiday>}
            <Wrap>{children}</Wrap>
        </Container>
    )
}

export default memo(Day)
