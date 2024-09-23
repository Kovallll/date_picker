import { memo, useState } from 'react'

import { CellData, Holiday, TodoMark } from './styled'
import { CellProps } from './types'

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
    const unhover = $isActive || $isStartRange || $inRange || $isEndRange
    const showHoliday = () => {
        const isHover = !!holidayTitle && !unhover
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
            {$isWithTodo && <TodoMark />}
            {isHover && <Holiday>{holidayTitle}</Holiday>}
            <>{children}</>
        </CellData>
    )
}

export default memo(Cell)
