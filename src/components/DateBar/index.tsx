import { memo, useCallback, useContext, useRef, useState } from 'react'

import { nextImageAlt, prevImageAlt } from './config'
import { Container, DateBarBlock, Month, Year } from './styled'
import { DateBarProps } from './types'

import MonthCalendar from '@components/MonthCalendar'
import { SwapButton } from '@components/SwapButton'
import YearCalendar from '@components/YearCalendar'
import { defaultMinMaxDate, icons, months } from '@constants'
import { DateContext } from '@context'
import { useClickOutside } from '@hooks'

const DateBar = ({ minMaxDate, ...restProps }: DateBarProps) => {
    const {
        year,
        currentMonth,
        handleChangeYear,
        handleChangeCurrentMonth,
        handleDecrementMonth,
        handleIncrementMonth,
    } = useContext(DateContext)
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
    const { maxMonth, minMonth, maxYear, minYear } =
        minMaxDate ?? defaultMinMaxDate
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
        setIsMonthOpen((prev) => !prev)
    }, [])

    const handleOpenYear = useCallback(() => {
        setIsYearOpen((prev) => !prev)
    }, [])

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

    const isDisabledPrevButton =
        (year === 0 && currentMonth === 1) ||
        (minMonth === currentMonth && year === minYear)
    const isDisabledNextButton = maxMonth === currentMonth && year === maxYear
    const disabledPrevButton = isDisabledPrevButton || isMonthOpen || isYearOpen
    const disabledNextButton = isDisabledNextButton || isMonthOpen || isYearOpen
    const prevIcon = disabledPrevButton
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon
    const nextIcon = disabledNextButton
        ? icons.disabledNextArrowIcon
        : icons.nextArrowIcon

    return (
        <Container {...restProps}>
            <SwapButton
                onClick={handleDecrementMonth}
                disabled={disabledPrevButton}
                src={prevIcon}
                alt={prevImageAlt}
            />
            <DateBarBlock ref={calendarRef}>
                <>
                    <Month onClick={handleOpenMonth}>
                        {months[currentMonth - 1]}
                    </Month>
                    <Year onClick={handleOpenYear}>{year}</Year>
                    {isMonthOpen && (
                        <MonthCalendar
                            month={currentMonth}
                            handleSelectMonth={handleSelectMonth}
                        />
                    )}
                    {isYearOpen && (
                        <YearCalendar
                            year={year}
                            handleSelectYear={handleSelectYear}
                        />
                    )}
                </>
            </DateBarBlock>
            <SwapButton
                onClick={handleIncrementMonth}
                disabled={disabledNextButton}
                src={nextIcon}
                alt={nextImageAlt}
            />
        </Container>
    )
}

export default memo(DateBar)
