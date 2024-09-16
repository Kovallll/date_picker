import { memo, useContext, useState } from 'react'

import { clickNextMonthCell } from './clickNextMonthCell'
import { clickPrevMonthCell } from './clickPrevMonthCell'
import { fisrtDateLongerThanSecondError } from './config'
import { Article } from './styled'
import { DaysTableProps } from './types'

import { WeekRow } from '@components/WeekRow'
import {
    daysInWeek,
    initialActiveCellId,
    prevCurrentMonth,
    waitTime,
} from '@constants'
import { DateContext, InputContext } from '@context'
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

const DaysTable = (props: DaysTableProps) => {
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
        startDay,
        ...restProps
    } = props

    const {
        year,
        currentMonth,
        handleChangeYear,
        handleChangeCurrentMonth,
        handleIncrementMonth,
        handleDecrementMonth,
    } = useContext(DateContext)

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

    const days = getCalendarCells(year, currentMonth - 1, startDay)
    const isFisrtClick = range.end === null
    const isRange = !!isWithRange && !!onClickWithRange

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
        prevFirstDate !== firstInputDate && isKeyboardChange
    const isValidSecondInputDate =
        prevSecondDate !== secondInputDate && isKeyboardChange

    const isFirstDateLonger =
        Number(secondInputCellId) <= Number(firstInputCellId)

    const cellsWithOutNextMonth =
        getCellsInMonth(year, currentMonth - 1) -
        getCellsNextMonth(year, currentMonth - 1)
    const prevMonthCells = getCellsPrevMonth(year, currentMonth - 1) - 1

    const debounceChangeFirstRange = useDebounce(() => {
        if (isFirstDateLonger) {
            handleChangeError(fisrtDateLongerThanSecondError)
        }
        if (!isFirstDateLonger && onClickWithRange) {
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

        if (isRange) {
            setRange((prev) => ({
                start: prev.start,
                end: Number(firstInputCellId),
            }))
        }
    }, waitTime)

    if (isValidFirstInputDate) {
        setPrevFirstDate(firstInputDate)

        if (range.start === null) {
            debounceChangeActiveCellId()
        }
        if (isRange && activeCellId !== initialActiveCellId) {
            debounceChangeFirstRange()
        }
    }

    if (!isFirstDateLonger) {
        handleChangeError('')
    }

    const debounceChangeSecondDate = useDebounce(() => {
        if (isFirstDateLonger) {
            handleChangeError(fisrtDateLongerThanSecondError)
        }
        if (!isFirstDateLonger && onClickWithRange) {
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
    if (isValidSecondInputDate) {
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
        const isNextMonthCell = dayId >= cellsWithOutNextMonth
        const isPrevMonthCell = dayId <= prevMonthCells

        const isFirstClickCell =
            isFisrtClick && !isPrevMonthCell && !isNextMonthCell

        const isSecondClick =
            isRange &&
            cellId !== range.end &&
            !isFisrtClick &&
            !isPrevMonthCell &&
            !isNextMonthCell

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
    const firstDayIndex = days[0].data.findIndex((el) => el.day === 1)
    return (
        <Article {...restProps}>
            {days.map(({ data, id: weekActiveId }) => (
                <WeekRow
                    key={weekActiveId}
                    activeCellId={activeCellId}
                    data={data}
                    handleClickDay={handleClickDay}
                    range={range}
                    initialWeekDays={initialWeekDays}
                    firstDayIndex={firstDayIndex}
                    startDay={startDay}
                />
            ))}
        </Article>
    )
}

export default memo(DaysTable)
