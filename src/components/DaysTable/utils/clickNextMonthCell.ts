import { ClickNextMonthCell } from '../types'

import { daysInWeek } from '@constants'

export const clickNextMonthCell = (props: ClickNextMonthCell) => {
    const {
        cellId,
        ctrl,
        inputDate,
        handleSetActiveCellId,
        setPrevFirstDate,
        setPrevSecondDate,
        handleChangeFirstDateInput,
        handleChangeSecondDateInput,
        isRange,
        range,
        onClickWithRange,
        handleSetRange,
        isWithInput,
        prevFirstDate,
        prevSecondDate,
    } = props
    const nextMonthCellId = cellId + daysInWeek
    const isFisrtClick = range.end === null
    const isNextDayClick =
        isRange && !isFisrtClick && nextMonthCellId !== range.end

    handleSetActiveCellId(String(nextMonthCellId))

    if (isWithInput && isFisrtClick) {
        handleChangeFirstDateInput(inputDate)
        setPrevFirstDate(inputDate)
        handleChangeSecondDateInput(inputDate)
        setPrevSecondDate(inputDate)
    }

    if (isNextDayClick && onClickWithRange) {
        const { range: newRange, inputRange: inputRangeData } =
            onClickWithRange(
                ctrl,
                nextMonthCellId,
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
            setPrevFirstDate(inputRangeData.start)
            setPrevSecondDate(inputRangeData.end)
        }
    }
    if (isRange && isFisrtClick) {
        handleSetRange({
            start: range.start,
            end: nextMonthCellId,
        })
    }
}
