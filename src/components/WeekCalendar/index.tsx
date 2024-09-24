import { forwardRef, memo, useContext, useState } from 'react'

import { changeType, nextImageAlt, prevImageAlt } from './config'
import { ButtonsWrap, WeekSection } from './styled'
import { WeekCalendarProps } from './types'

import PopupTableCells from '@components/PopupTableCells'
import { SwapButton } from '@components/SwapButton'
import {
    countElementInPopupTable,
    icons,
    maxCountWeeks,
    maxWeekInPopupTable,
    minBarrierWeek,
    minWeekInPopupTable,
} from '@constants'
import { DateContext } from '@context'
import { getMonthByWeek, getPopupTableCells } from '@utils'

const WeekCalendar = forwardRef(function WeekCalendar(
    { handleOpenCalendar, ...restprops }: WeekCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    const { year, weekId, handleChangeCurrentMonth, handleChangeWeek } =
        useContext(DateContext)

    const [week, setWeek] = useState(weekId)

    const getWeekData = () => {
        if (week > maxWeekInPopupTable) {
            return getPopupTableCells(
                countElementInPopupTable,
                maxWeekInPopupTable
            )
        } else return getPopupTableCells(countElementInPopupTable, weekId)
    }

    const [weekData, setWeekData] = useState(getWeekData())

    const isDisabledPrevButton = week === minWeekInPopupTable
    const isDisabledNextButton = week >= maxWeekInPopupTable

    const handleClickNextButton = () => {
        if (week >= minBarrierWeek && week < maxCountWeeks) {
            setWeek(maxWeekInPopupTable)
            setWeekData(
                getPopupTableCells(
                    countElementInPopupTable,
                    maxWeekInPopupTable
                )
            )
        }
        if (week < minBarrierWeek) {
            setWeek((prev) => prev + countElementInPopupTable)
            setWeekData(
                getPopupTableCells(
                    countElementInPopupTable,
                    week + countElementInPopupTable
                )
            )
        }
    }

    const handleClickPrevButton = () => {
        if (week <= countElementInPopupTable && week > minWeekInPopupTable) {
            setWeek(minWeekInPopupTable)
            setWeekData(
                getPopupTableCells(
                    countElementInPopupTable,
                    minWeekInPopupTable
                )
            )
        }
        if (week > countElementInPopupTable) {
            setWeek((prev) => prev - countElementInPopupTable)
            setWeekData(
                getPopupTableCells(
                    countElementInPopupTable,
                    week - countElementInPopupTable
                )
            )
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
        <WeekSection ref={ref} {...restprops}>
            <ButtonsWrap>
                <SwapButton
                    onClick={handleClickPrevButton}
                    src={prevIcon}
                    alt={prevImageAlt}
                />
                <SwapButton
                    onClick={handleClickNextButton}
                    src={nextIcon}
                    alt={nextImageAlt}
                />
            </ButtonsWrap>
            <PopupTableCells
                fillData={weekData}
                handleSelectElement={handleChangeWeekId}
                changeType={changeType}
                activeId={weekId}
            />
        </WeekSection>
    )
})

export default memo(WeekCalendar)
