import { useCallback, useEffect, useState } from 'react'

import { Container, WeekRow } from './styled.js'
import { DaysTableProps } from './types'

import Day from '@components/Day'
import {
    countMonth,
    initialActiveCellId,
    initialRangeEnd,
    initialRangeStart,
} from '@constants'
import { IRange, MonthCellsData } from '@types'
import { getCalendarCells, getFalseYearArray } from '@utils'

export const DaysTable = (props: DaysTableProps) => {
    const {
        currentMonth,
        year,
        isWithRange,
        onClickWithRange,
        startDay,
        ...restProps
    } = props

    const [years, setYears] = useState([year])

    const falseYearArray = getFalseYearArray(year)

    const [activeCellId, setActiveCellId] = useState(initialActiveCellId)
    const [monthRange, setMonthRange] =
        useState<MonthCellsData[]>(falseYearArray)
    const [range, setRange] = useState<IRange>({
        start: initialRangeStart,
        end: initialRangeEnd,
    })

    useEffect(() => {
        if (!years.find((el) => el === year)) {
            setMonthRange((prev) => [...prev, ...falseYearArray])
            setYears((prev) => [...prev, year])
        }
    }, [falseYearArray, year, years])

    const activeMonthId =
        years.findIndex((el) => el === year) * countMonth + (currentMonth - 1)

    const days = getCalendarCells(year, currentMonth - 1, startDay)

    const handleClickDay = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
            const cellId = Number(id)
            if (range.end === initialRangeEnd) {
                if (activeCellId === id) {
                    setActiveCellId(initialActiveCellId)
                } else {
                    setActiveCellId(id)
                    if (isWithRange) {
                        setRange((prev: IRange) => ({
                            start: prev.start,
                            end: cellId,
                        }))
                    }
                }
            }
            if (
                isWithRange &&
                onClickWithRange &&
                cellId !== range.end &&
                range.end !== initialRangeEnd
            ) {
                const { data: newMonthRange, range: newRange } =
                    onClickWithRange(e.ctrlKey, cellId, range, monthRange)
                setMonthRange(newMonthRange)
                setRange(newRange)
            }
        },
        [activeCellId, isWithRange, monthRange, onClickWithRange, range]
    )

    return (
        <Container {...restProps}>
            {days.map(({ data, id: weekId }) => (
                <WeekRow key={weekId}>
                    {data.map(({ id: dayId, day }) => {
                        return (
                            <Day
                                key={dayId}
                                id={dayId}
                                onClickDay={handleClickDay}
                                $isActive={
                                    activeCellId === dayId &&
                                    range.start === initialRangeStart
                                }
                                $inRange={
                                    monthRange[activeMonthId]?.data[
                                        Number(dayId) -
                                            Number(
                                                monthRange[activeMonthId]?.id
                                            )
                                    ]
                                }
                                $isStartRange={range.start === Number(dayId)}
                                $isEndRange={range.end === Number(dayId)}
                            >
                                {day}
                            </Day>
                        )
                    })}
                </WeekRow>
            ))}
        </Container>
    )
}
