import { forwardRef, memo, useState } from 'react'

import { nextImageAlt, prevImageAlt } from './config'
import { Buttons, Container } from './styled'
import { WeekCalendarProps } from './types'

import { SwapButton } from '@components/SwapButton'
import TwelvePicker from '@components/TwelvePicker'
import { icons } from '@constants'

const WeekCalendar = forwardRef(function WeekCalendar(
    { initialCurrentWeek }: WeekCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    const countElementInTable = 12

    const initialYearData = (week: number) => {
        const weekData = [
            ...Array(countElementInTable)
                .fill({})
                .map((_, index) => String(week + index)),
        ]
        return weekData
    }

    const [currentWeek, setCurrentWeek] = useState(initialCurrentWeek)
    const [weekData, setWeekData] = useState(initialYearData(currentWeek))
    console.log(currentWeek, 'currentWeek')
    const isDisabled = currentWeek === 0

    const handleClickNextButton = () => {
        setCurrentWeek((prev) => prev + countElementInTable)
        setWeekData(initialYearData(currentWeek + countElementInTable))
    }

    const handleClickPrevButton = () => {
        if (currentWeek <= 12 && currentWeek > 0 && !isDisabled) {
            setCurrentWeek(0)
            setWeekData(initialYearData(0))
        }
        if (!isDisabled && currentWeek > 12) {
            setCurrentWeek((prev) => prev - countElementInTable)
            setWeekData(initialYearData(currentWeek - countElementInTable))
        }
    }

    const prevIcon = isDisabled
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon

    return (
        <Container ref={ref}>
            <Buttons>
                <SwapButton onClick={handleClickPrevButton}>
                    <img src={prevIcon} aria-hidden="true" alt={prevImageAlt} />
                </SwapButton>
                <SwapButton onClick={handleClickNextButton}>
                    <img
                        src={icons.nextArrowIcon}
                        aria-hidden="true"
                        alt={nextImageAlt}
                    />
                </SwapButton>
            </Buttons>
            <TwelvePicker fillData={weekData} />
        </Container>
    )
})

export default memo(WeekCalendar)
