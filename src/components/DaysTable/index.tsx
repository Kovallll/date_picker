import { useContext, useState } from 'react'

import { clickNextMonthCell } from './clickNextMonthCell'
import { clickPrevMonthCell } from './clickPrevMonthCell'
import { fisrtDateLongerThanSecondError, minMaxError } from './config'
import { Container } from './styled'
import { DaysTableProps } from './types'

import { InputContext, MinMaxContext } from '@components/Calendar'
import { WeekRow } from '@components/WeekRow'
import { daysInWeek, initialActiveCellId, prevCurrentMonth } from '@constants'
import { useDebounce } from '@hooks'
import { Range } from '@types'
import {
    getAllCellsPrevMonths,
    getCalendarCells,
    getCellsInMonth,
    getCellsNextMonth,
    getCellsPrevMonth,
    getCountCellsPrevYears,
    getDateFormat,
    getValidInputCell,
} from '@utils'

export const DaysTable = (props: DaysTableProps) => {
    const {
        handleChangeError,
        isWithRange,
        isKeyboardChange,
        handleKeyboardChange,
        onClickWithRange,
        initialWeekDays,
        firstInputDate,
        secondInputDate,
        handleChangeFirstDateInput,
        handleChangeSecondDateInput,
        year,
        currentMonth,
        handleChangeCurrentMonth,
        handleChangeYear,
        handleDecrementMonth,
        handleIncrementMonth,
        ...restProps
    } = props
    const { maxDate, minDate } = useContext(MinMaxContext)
    const isWithInput = useContext(InputContext)
    const [prevFirstDate, setPrevFirstDate] = useState('')
    const [prevSecondDate, setPrevSecondDate] = useState('')
    const [activeCellId, setActiveCellId] = useState(initialActiveCellId)
    const [range, setRange] = useState<Range>({
        start: null,
        end: null,
    })

    const handleSetActiveCellId = (id: string) => {
        setActiveCellId(id)
    }

    const handleSetRange = (range: Range) => {
        setRange(range)
    }

    const days = getCalendarCells(year, currentMonth - 1)
    const isFisrtClick = range.end === null
    const isRange = !!isWithRange && !!onClickWithRange
    const waitTime = 600

    const {
        isValidDate: isValidFirstInput,
        inputCellId: firstInputCellId,
        inputYear: firstInputYear,
        inputMonth: firstInputMonth,
    } = getValidInputCell(firstInputDate, prevFirstDate)
    const {
        isValidDate: isValidSecondInput,
        inputCellId: secondInputCellId,
        inputYear: secondInputYear,
        inputMonth: secondInputMonth,
    } = getValidInputCell(secondInputDate, prevSecondDate)
    const { isValidDate: isValidMinDate, inputCellId: minDateCellId } =
        getValidInputCell(minDate)
    const { isValidDate: isValidMaxDate, inputCellId: maxDateCellId } =
        getValidInputCell(maxDate)

    const isValidFirstInputDate =
        firstInputDate.length >= daysInWeek &&
        prevFirstDate !== firstInputDate &&
        isKeyboardChange &&
        isValidFirstInput
    const isValidSecondInputDate =
        firstInputDate.length >= daysInWeek &&
        secondInputDate.length >= daysInWeek &&
        prevSecondDate !== secondInputDate &&
        isKeyboardChange &&
        isValidSecondInput
    const isFirstDateLonger =
        secondInputCellId <= firstInputCellId &&
        secondInputDate.length >= daysInWeek

    const isMinFirstInput = !isValidMinDate
        ? true
        : minDateCellId <= firstInputCellId
    const isMaxFirstInput = !isValidMaxDate
        ? true
        : firstInputCellId <= maxDateCellId
    const isMinSecondInput = !isValidMinDate
        ? true
        : minDateCellId <= secondInputCellId
    const isMaxSecondInput = !isValidMaxDate
        ? true
        : secondInputCellId <= maxDateCellId
    const isMinMaxFirstInputValid = isMinFirstInput && isMaxFirstInput
    const isMinMaxSecondInputValid = isMinSecondInput && isMaxSecondInput

    const isMinMaxErrorFirstInput =
        !isMinMaxFirstInputValid && isValidFirstInput
    const isMinMaxErrorSecondInput = !isValidSecondInput
        ? false
        : !isMinMaxSecondInputValid

    const cellsWithOutNextMonth =
        getCellsInMonth(year, currentMonth - 1) -
        getCellsNextMonth(year, currentMonth - 1)
    const prevMonthCells = getCellsPrevMonth(year, currentMonth - 1) - 1

    const isNoErrors =
        !isFirstDateLonger && onClickWithRange && !isMinMaxErrorFirstInput

    const debounceChangeFirstRange = useDebounce(() => {
        if (isFirstDateLonger) {
            handleChangeError(fisrtDateLongerThanSecondError)
        }
        if (isNoErrors) {
            const { range: newRange } = onClickWithRange(
                false,
                firstInputCellId,
                range
            )
            setRange(newRange)
            handleChangeCurrentMonth(firstInputMonth)
            handleChangeYear(firstInputYear)
        }
    }, waitTime)
    const debounceChangeActiveCellId = useDebounce(() => {
        if (!isMinMaxErrorFirstInput) {
            setActiveCellId(String(firstInputCellId))

            handleChangeCurrentMonth(firstInputMonth)

            handleChangeYear(firstInputYear)
            setRange((prev) => ({
                start: prev.start,
                end: firstInputCellId,
            }))
        }
    }, waitTime)

    if (isValidFirstInputDate) {
        setPrevFirstDate(firstInputDate)
        setPrevSecondDate(firstInputDate)

        if (range.start === null) {
            debounceChangeActiveCellId()
        }
        if (isRange && activeCellId !== initialActiveCellId) {
            debounceChangeFirstRange()
        }
    }

    if (isMinMaxErrorFirstInput || isMinMaxErrorSecondInput) {
        handleChangeError(minMaxError)
    }

    const isClearError =
        !isFirstDateLonger &&
        !isMinMaxErrorFirstInput &&
        !isMinMaxErrorSecondInput

    if (isClearError) {
        handleChangeError('')
    }

    const debounceChangeSecondDate = useDebounce(() => {
        if (isFirstDateLonger) {
            handleChangeError(fisrtDateLongerThanSecondError)
        }
        if (!isFirstDateLonger && onClickWithRange) {
            const { range: newRange } = onClickWithRange(
                false,
                secondInputCellId,
                range,
                true
            )
            setRange(newRange)
            handleChangeCurrentMonth(secondInputMonth)
            handleChangeYear(secondInputYear)
        }
    }, waitTime)
    if (isValidSecondInputDate && !isMinMaxErrorSecondInput) {
        setPrevSecondDate(secondInputDate)
        debounceChangeSecondDate()
    }

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        const cellId = Number(id)
        const dayId =
            cellId -
            getCountCellsPrevYears(year) -
            getAllCellsPrevMonths(year, currentMonth - 1)
        const isMinValid =
            minDate === '' || !isValidMinDate ? true : minDateCellId <= cellId
        const isMaxValid =
            maxDate === '' || !isValidMaxDate ? true : cellId <= maxDateCellId
        const isMinMaxValid = isMinValid && isMaxValid
        const isNextMonthCell = dayId >= cellsWithOutNextMonth && isMinMaxValid

        const isPrevMonthCell = dayId <= prevMonthCells && isMinMaxValid

        const isFirstClickCell =
            isFisrtClick &&
            !isPrevMonthCell &&
            !isNextMonthCell &&
            isMinMaxValid
        const isSecondClick =
            isRange &&
            cellId !== range.end &&
            !isFisrtClick &&
            !isPrevMonthCell &&
            !isNextMonthCell &&
            isMinMaxValid

        let inputDate = getDateFormat(year, currentMonth, dayId)

        if (isPrevMonthCell && isWithInput) {
            inputDate = getDateFormat(
                year,
                currentMonth - 1,
                getCellsInMonth(year, currentMonth - prevCurrentMonth) -
                    daysInWeek +
                    dayId
            )
        }
        if (isNextMonthCell && isWithInput) {
            inputDate = getDateFormat(
                year,
                currentMonth + 1,
                dayId +
                    daysInWeek -
                    getCellsInMonth(year, currentMonth + prevCurrentMonth)
            )
        }
        if (isNextMonthCell) {
            const nextClickProps = {
                cellId,
                ctrl: e.ctrlKey,
                inputDate,
                handleSetActiveCellId,
                handleIncrementMonth,
                handleChangeFirstDateInput,
                handleChangeSecondDateInput,
                setPrevFirstDate,
                setPrevSecondDate,
                isRange,
                range,
                onClickWithRange,
                firstInputDate,
                secondInputDate,
                handleSetRange,
                isWithInput,
                prevFirstDate,
                prevSecondDate,
            }
            handleIncrementMonth()
            clickNextMonthCell(nextClickProps)
            handleKeyboardChange(false)
        }
        if (isPrevMonthCell) {
            const prevClickProps = {
                cellId,
                ctrl: e.ctrlKey,
                inputDate,
                handleSetActiveCellId,
                handleChangeFirstDateInput,
                handleChangeSecondDateInput,
                setPrevFirstDate,
                setPrevSecondDate,
                isRange,
                range,
                onClickWithRange,
                firstInputDate,
                secondInputDate,
                handleSetRange,
                isWithInput,
                prevFirstDate,
                prevSecondDate,
            }
            handleDecrementMonth()
            clickPrevMonthCell(prevClickProps)
            handleKeyboardChange(false)
        }
        if (isFirstClickCell && activeCellId === id) {
            setActiveCellId(initialActiveCellId)
        }
        if (isFirstClickCell && activeCellId !== id) {
            setActiveCellId(id)
            if (isWithInput) {
                const inputDate = getDateFormat(year, currentMonth, dayId)
                handleKeyboardChange(false)
                handleChangeFirstDateInput(inputDate)
                setPrevFirstDate(inputDate)
                setPrevSecondDate(inputDate)
            }
            if (isRange) {
                setRange((prev: Range) => ({
                    start: prev.start,
                    end: cellId,
                }))
            }
        }
        if (isSecondClick) {
            const { range: newRange, inputRange: inputRangeData } =
                onClickWithRange(
                    e.ctrlKey,
                    cellId,
                    range,
                    false,
                    inputDate,
                    prevFirstDate,
                    prevSecondDate
                )
            setRange(newRange)

            if (isWithInput) {
                handleChangeSecondDateInput(inputRangeData.end)
                setPrevSecondDate(inputRangeData.end)
                setPrevFirstDate(inputRangeData.start)
                handleChangeFirstDateInput(inputRangeData.start)
            }
        }
    }

    return (
        <Container {...restProps}>
            {days.map(({ data, id: weekId }) => (
                <WeekRow
                    year={year}
                    currentMonth={currentMonth}
                    key={weekId}
                    activeCellId={activeCellId}
                    data={data}
                    handleClickDay={handleClickDay}
                    range={range}
                    initialWeekDays={initialWeekDays}
                />
            ))}
        </Container>
    )
}
