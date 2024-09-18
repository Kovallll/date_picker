import { memo } from 'react'

import { CellData, TodoCircle } from './styled'
import { CellProps } from './types'

const Cell = (props: CellProps) => {
    const {
        children,
        $isPopup,
        $isDisabled,
        $isActive,
        $inRange,
        $isStartRange,
        $isEndRange,
        $isHoliday,
        $isNewMonth,
        $isPopupActive,
        $isWithTodo,
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
        <CellData
            {...restProps}
            $isPopupActive={$isPopupActive}
            $isPopup={$isPopup}
            $isDisabled={$isDisabled}
            $isActive={$isActive}
            $isStartRange={$isStartRange}
            $isEndRange={$isEndRange}
            $inRange={$inRange}
            $isHoliday={$isHoliday}
            $isNewMonth={$isNewMonth}
            onClick={handleClickDay}
        >
            {$isWithTodo && <TodoCircle />}
            <>{children}</>
        </CellData>
    )
}

export default memo(Cell)
