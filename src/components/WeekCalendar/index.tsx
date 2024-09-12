import { forwardRef, memo, useContext, useState } from 'react'

import { changeType, nextImageAlt, prevImageAlt } from './config'
import { Buttons, Container } from './styled'
import { WeekCalendarProps } from './types'

import { DateContext } from '@components/Calendar'
import { SwapButton } from '@components/SwapButton'
import TwelvePicker from '@components/TwelvePicker'
import { icons } from '@constants'
import { getMonthByWeek } from '@utils'

const WeekCalendar = forwardRef(function WeekCalendar(
    { handleOpenCalendar }: WeekCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    const { year, weekId, handleChangeCurrentMonth, handleChangeWeek } =
        useContext(DateContext)

    const countElementInTable = 12
    const countWeeks = 52
    const minBarrier = 29
    const maxWeekInTable = 41
    const minWeekInTable = 1
    const [week, setWeek] = useState(weekId)
    const initialYearData = (weekId: number) => {
        let weekData = []
        if (week > maxWeekInTable) {
            weekData = [
                ...Array(countElementInTable)
                    .fill({})
                    .map((_, index) => String(maxWeekInTable + index)),
            ]
        } else {
            weekData = [
                ...Array(countElementInTable)
                    .fill({})
                    .map((_, index) => String(weekId + index)),
            ]
        }
        return weekData
    }

    const [weekData, setWeekData] = useState(initialYearData(weekId))

    const isDisabledPrevButton = week === minWeekInTable
    const isDisabledNextButton = week >= maxWeekInTable

    const handleClickNextButton = () => {
        if (week >= minBarrier && week < countWeeks) {
            setWeek(maxWeekInTable)
            setWeekData(initialYearData(maxWeekInTable))
        }
        if (week < minBarrier) {
            setWeek((prev) => prev + countElementInTable)
            setWeekData(initialYearData(week + countElementInTable))
        }
    }

    const handleClickPrevButton = () => {
        if (week <= countElementInTable && week > minWeekInTable) {
            setWeek(minWeekInTable)
            setWeekData(initialYearData(minWeekInTable))
        }
        if (week > countElementInTable) {
            setWeek((prev) => prev - countElementInTable)
            setWeekData(initialYearData(week - countElementInTable))
        }
    }

    const handleChangeWeekId = (weekId: number) => {
        handleChangeWeek(weekId)
        const monthId = getMonthByWeek(year, weekId)
        handleChangeCurrentMonth(monthId)
        handleOpenCalendar()
    }

    const prevIcon = isDisabledPrevButton
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon
    const nextIcon = isDisabledNextButton
        ? icons.disabledNextArrowIcon
        : icons.nextArrowIcon

    return (
        <Container ref={ref}>
            <Buttons>
                <SwapButton onClick={handleClickPrevButton}>
                    <img src={prevIcon} aria-hidden="true" alt={prevImageAlt} />
                </SwapButton>
                <SwapButton onClick={handleClickNextButton}>
                    <img src={nextIcon} aria-hidden="true" alt={nextImageAlt} />
                </SwapButton>
            </Buttons>
            <TwelvePicker
                fillData={weekData}
                handleSelectElement={handleChangeWeekId}
                changeType={changeType}
                activeId={weekId}
            />
        </Container>
    )
})

export default memo(WeekCalendar)
