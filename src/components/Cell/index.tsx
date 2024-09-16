import { memo, useState } from 'react'

import { defaultHoliday } from './config'
import { CellData, Holiday, Wrap } from './styled'
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
            onClick={handleClickDay}
        >
            {isHover && <Holiday>{holiday}</Holiday>}
            <Wrap>{children}</Wrap>
        </CellData>
    )
}

export default memo(Cell)
