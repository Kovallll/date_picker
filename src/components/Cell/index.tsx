import { memo, useState } from 'react'

import { CellData, Holiday, TodoCircle } from './styled'
import { CellProps } from './types'

import { maxLenHolidayText } from '@constants'

const Cell = (props: CellProps) => {
    const {
        children,
        $isPopup,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isWeekend,
        $isNewMonth,
        holidayTitle,
        $isPopupActive,
        $isWithTodo,
        $isLowerThanMinDate,
        $isHigherThanMaxDate,
        onClickCell,
        id,
        ...restProps
    } = props
    const [isHover, setIsHover] = useState(false)

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        onClickCell(e, id)
    }
    let holiday = holidayTitle
    if (holidayTitle?.length >= maxLenHolidayText) {
        holiday = holidayTitle?.slice(0, maxLenHolidayText) + '...'
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
        <CellData
            {...restProps}
            onMouseOver={handleShowHoliday}
            onMouseLeave={handleHideHoliday}
            $isPopupActive={$isPopupActive}
            $isPopup={$isPopup}
            $isActive={$isActive}
            $isStartRange={$isStartRange}
            $isEndRange={$isEndRange}
            $inRange={$inRange}
            $isWeekend={$isWeekend}
            $isHoliday={$isHoliday}
            $isNewMonth={$isNewMonth}
            $isLowerThanMinDate={$isLowerThanMinDate}
            $isHigherThanMaxDate={$isHigherThanMaxDate}
            onClick={handleClickDay}
        >
            {$isWithTodo && <TodoCircle />}
            {isHover && <Holiday>{holiday}</Holiday>}
            <>{children}</>
        </CellData>
    )
}

export default memo(Cell)
