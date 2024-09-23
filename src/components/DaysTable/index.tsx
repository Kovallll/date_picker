import { memo, useContext, useState } from 'react'

import { Article } from './styled'
import { DaysTableProps } from './types'
import { clickNextMonthCell } from './utils/clickNextMonthCell'
import { clickPrevMonthCell } from './utils/clickPrevMonthCell'
import { isCellInMinMaxRange } from './utils/isCellInMinMaxRange'

import { WeekRow } from '@components/WeekRow'
import {daysInWeek,defaultMinMaxDate,initialActiveCellId, prevCurrentMonth} from '@constants'
import { DateContext, InputContext } from '@context'
import { useDebouncedInputDate } from '@hooks'
import { Range } from '@types'
import {getAllCellsPrevMonths,getCalendarCells,getCellsInMonth,getCellsNextMonth,getCellsPrevMonth,getCountCellsPrevYears,getDateFormat} from '@utils'

const DaysTable = (props: DaysTableProps) => {
    const {
        handleChangeError,
        isWithRange,
        isKeyboardChange,
        handleKeyboardChange,
        onClickWithRange,
        weekDays,
        firstInputDate,
        secondInputDate,
        handleChangeFirstDateInput,
        handleChangeSecondDateInput,
        startDay,
        handleGetHoliday,
        handleGetAllHolidays,
        minMaxDate,
        calendarData,
        ...restProps
    } = props

    const {
        year,
        currentMonth,
        weekId,
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

    calendarData.updateData({
        range,
        activeCellId,
        year,
        month: currentMonth,
        weekNumber: weekId,
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

    const debouncedInputDate = useDebouncedInputDate(
        onClickWithRange!,
        handleChangeError,
        activeCellId,
        firstInputDate,
        secondInputDate,
        prevFirstDate,
        prevSecondDate,
        isKeyboardChange,
        isRange,
        minMaxDate!,
        range,
        setActiveCellId,
        setPrevFirstDate,
        setPrevSecondDate,
        setRange
    )
    debouncedInputDate()

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

        const isMinMaxValid = isCellInMinMaxRange(
            cellId,
            minMaxDate ?? defaultMinMaxDate
        )
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
                    weekDays={weekDays}
                    firstDayIndex={firstDayIndex}
                    handleGetHoliday={handleGetHoliday}
                    handleGetAllHolidays={handleGetAllHolidays}
                    startDay={startDay}
                    minMaxDate={minMaxDate ?? defaultMinMaxDate}
                />
            ))}
        </Article>
    )
}

export default memo(DaysTable)
