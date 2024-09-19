import { useContext } from 'react'

import {
    fisrtDateLongerThanSecondError,
    minMaxError,
} from '@components/DaysTable/config'
import { isInputDateInMinMaxRange } from '@components/DaysTable/utils/isInputDateInMinMaxRange'
import { defaultMinMaxDate, initialActiveCellId, waitTime } from '@constants'
import { DateContext } from '@context'
import { useDebounce } from '@hooks'
import { minMaxCellDate, onClickWithRange, Range } from '@types'
import { getValidInputCell } from '@utils'

export const useDebouncedInputDate = (
    onClickWithRange: onClickWithRange,
    handleChangeError: (errorText: string) => void,
    activeCellId: string,
    firstInputDate: string,
    secondInputDate: string,
    prevFirstDate: string,
    prevSecondDate: string,
    isKeyboardChange: boolean,
    isRange: boolean,
    minMaxDate: minMaxCellDate,
    range: Range,
    setActiveCellId: (activeId: string) => void,
    setPrevFirstDate: (prevFirstDate: string) => void,
    setPrevSecondDate: (prevSecondDate: string) => void,
    setRange: (newRange: Range) => void
) => {
    const { handleChangeYear, handleChangeCurrentMonth } =
        useContext(DateContext)

    const {
        inputCellId: firstInputCellId,
        inputYear: firstInputYear,
        inputMonth: firstInputMonth,
    } = getValidInputCell(firstInputDate, prevFirstDate)
    const {
        inputCellId: secondInputCellId,
        inputYear: secondInputYear,
        inputMonth: secondInputMonth,
    } = getValidInputCell(secondInputDate, prevSecondDate)

    const isValidFirstInputDate =
        prevFirstDate !== firstInputDate &&
        isKeyboardChange &&
        firstInputDate !== ''
    const isValidSecondInputDate =
        prevSecondDate !== secondInputDate &&
        isKeyboardChange &&
        secondInputDate !== ''

    const { isFirstMinMax, isSecondMinMax } = isInputDateInMinMaxRange(
        minMaxDate ?? defaultMinMaxDate,
        firstInputCellId,
        secondInputCellId,
        firstInputDate,
        secondInputDate
    )
    const isFirstDateLonger = secondInputCellId <= firstInputCellId
    const isNoErrors = !isFirstDateLonger && !!onClickWithRange && isFirstMinMax
    const isClearError = !isFirstDateLonger && isFirstMinMax && isSecondMinMax

    const isFirstInputRange =
        isNoErrors &&
        isValidFirstInputDate &&
        isRange &&
        activeCellId !== initialActiveCellId &&
        !isFirstDateLonger

    const isFirstInputCellId =
        isFirstMinMax && range.start === null && isValidFirstInputDate

    const isSecondInputRange =
        isValidSecondInputDate && isSecondMinMax && !isFirstDateLonger
    return useDebounce(() => {
        if (isFirstDateLonger) {
            handleChangeError(fisrtDateLongerThanSecondError)
        }
        if (!isFirstMinMax || !isSecondMinMax) {
            handleChangeError(minMaxError)
        }
        if (isClearError) {
            handleChangeError('')
        }
        if (isFirstInputRange) {
            const { range: newRange } = onClickWithRange(
                false,
                firstInputCellId,
                range
            )
            setRange(newRange)
        }
        if (isFirstInputCellId) {
            setActiveCellId(String(firstInputCellId))

            if (isRange) {
                setRange({
                    start: range.start,
                    end: Number(firstInputCellId),
                })
            }
        }
        if (isFirstInputRange || isFirstInputCellId) {
            handleChangeCurrentMonth(firstInputMonth)
            handleChangeYear(firstInputYear)
            setPrevFirstDate(firstInputDate)
            setPrevSecondDate(firstInputDate)
        }
        if (isSecondInputRange) {
            const { range: newRange } = onClickWithRange(
                false,
                secondInputCellId,
                range,
                true
            )
            setRange(newRange)
            handleChangeCurrentMonth(secondInputMonth)
            handleChangeYear(secondInputYear)
            setPrevSecondDate(secondInputDate)
        }
    }, waitTime)
}
