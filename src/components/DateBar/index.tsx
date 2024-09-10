import { memo, useCallback, useRef, useState } from 'react'

import { nextImageAlt, prevImageAlt } from './config'
import { Container, DateBarBlock, Month, Year } from './styled'
import { DateBarProps } from './types'

import MonthCalendar from '@components/MonthCalendar'
import { SwapButton } from '@components/SwapButton'
import YearCalendar from '@components/YearCalendar'
import { icons, months } from '@constants'
import { useClickOutside } from '@hooks'

const DateBar = (props: DateBarProps) => {
    const {
        currentMonth,
        year,
        increment,
        decrement,
        handleChangeCurrentMonth,
        handleChangeYear,
        ...restProps
    } = props
    const [isMonthOpen, setIsMonthOpen] = useState(false)
    const [isYearOpen, setIsYearOpen] = useState(false)
    const [selectMonth, setSelectMonth] = useState({
        currentMonth,
        prevMonth: currentMonth,
    })
    const [selectYear, setSelectYear] = useState({
        currentYear: year,
        prevYear: year,
    })
    const calendarRef = useRef(null)

    useClickOutside(calendarRef, () => {
        setIsMonthOpen(false)
        setIsYearOpen(false)
    })

    if (selectYear.currentYear !== selectYear.prevYear) {
        handleChangeYear(selectYear.currentYear)
        setSelectYear((prev) => ({
            currentYear: prev.currentYear,
            prevYear: prev.currentYear,
        }))
    }
    if (selectMonth.currentMonth !== selectMonth.prevMonth) {
        handleChangeCurrentMonth(selectMonth.currentMonth)
        setSelectMonth((prev) => ({
            currentMonth: prev.currentMonth,
            prevMonth: prev.currentMonth,
        }))
    }

    const handleOpenMonth = useCallback(() => {
        if (!isYearOpen) setIsMonthOpen((prev) => !prev)
    }, [isYearOpen])

    const handleOpenYear = useCallback(() => {
        if (!isMonthOpen) setIsYearOpen((prev) => !prev)
    }, [isMonthOpen])

    const handleSelectMonth = useCallback(
        (monthId: number) => {
            setSelectMonth((prev) => ({
                currentMonth: monthId,
                prevMonth: prev.currentMonth,
            }))
            handleOpenMonth()
        },
        [handleOpenMonth]
    )

    const handleSelectYear = useCallback(
        (year: number) => {
            setSelectYear((prev) => ({
                currentYear: year,
                prevYear: prev.currentYear,
            }))
            handleOpenYear()
        },
        [handleOpenYear]
    )

    const isDisabled = year === 0 && currentMonth === 1
    const disabledPrevButton = isDisabled || isMonthOpen || isYearOpen
    const disabledNextButton = isMonthOpen || isYearOpen
    const prevIcon = disabledPrevButton
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon
    const nextIcon = disabledNextButton
        ? icons.disabledNextArrowIcon
        : icons.nextArrowIcon
    return (
        <Container {...restProps}>
            <SwapButton onClick={decrement} disabled={disabledPrevButton}>
                <img src={prevIcon} aria-hidden="true" alt={prevImageAlt} />
            </SwapButton>
            <DateBarBlock>
                <>
                    <Month onClick={handleOpenMonth}>
                        {months[currentMonth - 1]}
                    </Month>
                    <Year onClick={handleOpenYear}>{year}</Year>
                    {isMonthOpen && (
                        <MonthCalendar
                            handleSelectMonth={handleSelectMonth}
                            ref={calendarRef}
                        />
                    )}
                    {isYearOpen && (
                        <YearCalendar
                            year={year}
                            handleSelectYear={handleSelectYear}
                            ref={calendarRef}
                        />
                    )}
                </>
            </DateBarBlock>

            <SwapButton onClick={increment} disabled={disabledNextButton}>
                <img src={nextIcon} aria-hidden="true" alt={nextImageAlt} />
            </SwapButton>
        </Container>
    )
}

export default memo(DateBar)
