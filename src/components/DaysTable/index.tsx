import { useContext, useState } from 'react'

import { Container } from './styled'
import { DaysTableProps } from './types'

import { InputContext } from '@components/Calendar'
import { WeekRow } from '@components/WeekRow'
import {
    daysInWeek,
    initialActiveCellId,
    initialPrevInputDate,
    prevCurrentMonth,
} from '@constants'
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
        currentMonth,
        year,
        error,
        handleChangeError,
        isWithRange,
        isKeyboardChange,
        handleKeyboardChange,
        handleChangeCurrentMonth,
        handleChangeYear,
        onClickWithRange,
        handleIncrementMonth,
        handleDecrementMonth,
        initialWeekDays,
        firstInputDate,
        secondInputDate,
        handleChangeFirstDateInput,
        handleChangeSecondDateInput,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [prevFirstDate, setPrevFirstDate] = useState(initialPrevInputDate)
    const [prevSecondDate, setPrevSecondDate] = useState(initialPrevInputDate)
    const [activeCellId, setActiveCellId] = useState(initialActiveCellId)
    const [range, setRange] = useState<Range>({
        start: null,
        end: null,
    })

    const days = getCalendarCells(year, currentMonth - 1)
    const isFisrtClick = range.end === null
    const isSecondClick = range.start === null
    const isRange = isWithRange && onClickWithRange
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

    const debounceChangeFirstRange = useDebounce(() => {
        if (
            Number(firstInputCellId) >= Number(secondInputCellId) &&
            secondInputDate.length >= daysInWeek
        ) {
            handleChangeError('Первая дата не может быть больше второй!')
        } else if (onClickWithRange) {
            const { range: newRange } = onClickWithRange(
                false,
                Number(firstInputCellId),
                range
            )
            setRange(newRange)
            handleChangeCurrentMonth(firstInputMonth)

            handleChangeYear(firstInputYear)
        }
    }, waitTime)
    const debounceChangeActiveCellId = useDebounce(() => {
        setActiveCellId(firstInputCellId)
        handleChangeCurrentMonth(firstInputMonth)

        handleChangeYear(firstInputYear)
        setRange((prev) => ({
            start: prev.start,
            end: Number(firstInputCellId),
        }))
    }, waitTime)

    if (
        firstInputDate.length >= daysInWeek &&
        prevFirstDate !== firstInputDate &&
        isKeyboardChange &&
        isValidFirstInput
    ) {
        setPrevFirstDate(firstInputDate)

        if (range.start === null) {
            debounceChangeActiveCellId()
        }
        if (isRange && activeCellId !== '-1') {
            debounceChangeFirstRange()
        }
    }

    const debounceChangeSecondDate = useDebounce(() => {
        if (
            Number(secondInputCellId) <= Number(firstInputCellId) &&
            secondInputDate.length >= daysInWeek
        ) {
            handleChangeError('Первая дата не может быть больше второй!')
        } else if (onClickWithRange) {
            const { range: newRange } = onClickWithRange(
                false,
                Number(secondInputCellId),
                range,
                true
            )
            setRange(newRange)
            handleChangeCurrentMonth(secondInputMonth)
            handleChangeYear(secondInputYear)
        }
    }, waitTime)
    if (
        firstInputDate.length >= daysInWeek &&
        secondInputDate.length >= daysInWeek &&
        prevSecondDate !== secondInputDate &&
        isKeyboardChange &&
        isValidSecondInput &&
        !error
    ) {
        setPrevSecondDate(secondInputDate)
        debounceChangeSecondDate()
    }

    const handleClickPrevMonthCell = (
        cellId: number,
        ctrl: boolean,
        inputDate: string
    ) => {
        const prevMonthCellId = cellId - daysInWeek
        handleDecrementMonth()
        setActiveCellId(String(prevMonthCellId))

        if (isWithInput) {
            handleChangeFirstDateInput(inputDate)
            setPrevFirstDate(inputDate)
        }
        if (isRange && isFisrtClick) {
            setRange((prev: Range) => ({
                start: prev.start,
                end: prevMonthCellId,
            }))
        }
        if (isRange && !isFisrtClick) {
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
            setRange(newRange)
            if (isWithInput) {
                handleChangeFirstDateInput(inputRangeData.start)
                handleChangeSecondDateInput(inputRangeData.end)
                setPrevFirstDate(inputRangeData.start)
                setPrevSecondDate(inputRangeData.end)
            }
        }
    }

    const handleClickNextMonthCell = (
        cellId: number,
        ctrl: boolean,
        inputDate: string
    ) => {
        const nextMonthCellId = cellId + daysInWeek
        setActiveCellId(String(nextMonthCellId))
        handleIncrementMonth()

        if (isWithInput) {
            handleChangeFirstDateInput(inputDate)
            setPrevFirstDate(inputDate)
        }
        if (isRange && !isFisrtClick && isSecondClick) {
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
            setRange(newRange)
            if (isWithInput) {
                handleChangeFirstDateInput(prevSecondDate)
                handleChangeSecondDateInput(inputRangeData.end)
                setPrevFirstDate(prevSecondDate)
                setPrevSecondDate(inputRangeData.end)
            }
        }
        if (
            isRange &&
            !isFisrtClick &&
            !isSecondClick &&
            nextMonthCellId !== range.end
        ) {
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
            setRange(newRange)
            if (isWithInput) {
                handleChangeFirstDateInput(inputRangeData.start)
                handleChangeSecondDateInput(inputRangeData.end)
                setPrevFirstDate(inputRangeData.start)
                setPrevSecondDate(inputRangeData.end)
            }
        }
        if (isRange && isFisrtClick) {
            setRange((prev: Range) => ({
                start: prev.start,
                end: nextMonthCellId,
            }))
        }
    }
    const cellsWithOutNextMonth =
        getCellsInMonth(year, currentMonth - 1) -
        getCellsNextMonth(year, currentMonth - 1)
    const prevMonthCells = getCellsPrevMonth(year, currentMonth - 1) - 1

    const handleClickDay = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        id: string
    ) => {
        const cellId = Number(id)

        const dayId =
            cellId -
            getCountCellsPrevYears(year) -
            getAllCellsPrevMonths(year, currentMonth - 1)

        const isNextMonthCell = dayId >= cellsWithOutNextMonth
        const isPrevMonthCell = dayId <= prevMonthCells
        let inputDate = getDateFormat(year, currentMonth, dayId)

        if (isPrevMonthCell && isWithInput) {
            inputDate = getDateFormat(
                year,
                currentMonth - 1,
                getCellsInMonth(year, currentMonth - prevCurrentMonth) -
                    daysInWeek +
                    dayId
            )
        } else if (isNextMonthCell && isWithInput) {
            inputDate = getDateFormat(
                year,
                currentMonth + 1,
                dayId +
                    daysInWeek -
                    getCellsInMonth(year, currentMonth + prevCurrentMonth)
            )
        }
        if (isNextMonthCell) {
            handleClickNextMonthCell(cellId, e.ctrlKey, inputDate)
            handleKeyboardChange(false)
        } else if (isPrevMonthCell) {
            handleClickPrevMonthCell(cellId, e.ctrlKey, inputDate)
            handleKeyboardChange(false)
        } else if (isFisrtClick && activeCellId === id) {
            setActiveCellId(initialActiveCellId)
        } else if (isFisrtClick && activeCellId !== id) {
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
        } else if (isRange && cellId !== range.end && !isFisrtClick) {
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
            handleChangeSecondDateInput(inputRangeData.end)
            setPrevSecondDate(inputRangeData.end)
            setPrevFirstDate(inputRangeData.start)
            handleChangeFirstDateInput(inputRangeData.start)
        }
    }

    return (
        <Container {...restProps}>
            {days.map(({ data, id: weekId }) => (
                <WeekRow
                    key={weekId}
                    year={year}
                    activeCellId={activeCellId}
                    currentMonth={currentMonth}
                    data={data}
                    handleClickDay={handleClickDay}
                    range={range}
                    initialWeekDays={initialWeekDays}
                />
            ))}
        </Container>
    )
}
