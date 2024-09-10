import { ClickPrevMonthCell } from './types'

import { daysInWeek } from '@constants'

export const clickPrevMonthCell = (props: ClickPrevMonthCell) => {
    const {
        cellId,
        ctrl,
        inputDate,
        handleSetActiveCellId,
        handleChangeFirstDateInput,
        handleChangeSecondDateInput,
        setPrevFirstDate,
        setPrevSecondDate,
        isRange,
        range,
        onClickWithRange,
        prevFirstDate,
        prevSecondDate,
        handleSetRange,
        isWithInput,
    } = props
    const isFisrtClick = range.end === null
    const prevMonthCellId = cellId - daysInWeek
    const isSecondClick = isRange && !isFisrtClick && onClickWithRange

    handleSetActiveCellId(String(prevMonthCellId))

    if (isWithInput && isFisrtClick) {
        handleChangeFirstDateInput(inputDate)
        setPrevFirstDate(inputDate)
        handleChangeSecondDateInput(inputDate)
        setPrevSecondDate(inputDate)
    }
    if (isRange && isFisrtClick) {
        handleSetRange({
            start: range.start,
            end: prevMonthCellId,
        })
    }
    if (isSecondClick) {
        const { range: newRange, inputRange: inputRangeData } =
            onClickWithRange(
                ctrl,
                prevMonthCellId,
                range,
                false,
                inputDate,
                prevFirstDate,
                prevSecondDate
            )
        handleSetRange(newRange)
        if (isWithInput) {
            handleChangeFirstDateInput(inputRangeData.start)
            handleChangeSecondDateInput(inputRangeData.end)
        }
    }
}
