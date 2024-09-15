import { forwardRef, memo, useState } from 'react'

import { changeType, nextImageAlt, prevImageAlt } from './config'
import { ButtonsWrap, YearSection } from './styled'
import { YearCalendarProps } from './types'

import PopupTableCells from '@components/PopupTableCells'
import { SwapButton } from '@components/SwapButton'
import { countElementInPopupTable, icons } from '@constants'
import { getPopupTableCells } from '@utils'

const YearCalendar = forwardRef(function YearCalendar(
    { year, handleSelectYear }: YearCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    const [currentYear, setCurrentYear] = useState(year)
    const [yearData, setYearData] = useState(
        getPopupTableCells(countElementInPopupTable, currentYear)
    )

    const isDisabled = currentYear === 0

    const handleClickNextButton = () => {
        setCurrentYear((prev) => prev + countElementInPopupTable)
        setYearData(
            getPopupTableCells(
                countElementInPopupTable,
                currentYear + countElementInPopupTable
            )
        )
    }

    const handleClickPrevButton = () => {
        if (currentYear <= countElementInPopupTable && currentYear > 0) {
            setCurrentYear(0)
            setYearData(getPopupTableCells(countElementInPopupTable, 0))
        }
        if (currentYear > countElementInPopupTable) {
            setCurrentYear((prev) => prev - countElementInPopupTable)
            setYearData(
                getPopupTableCells(
                    countElementInPopupTable,
                    currentYear - countElementInPopupTable
                )
            )
        }
    }

    const prevIcon = isDisabled
        ? icons.disabledPrevArrowIcon
        : icons.prevArrowIcon

    return (
        <YearSection ref={ref}>
            <ButtonsWrap>
                <SwapButton
                    onClick={handleClickPrevButton}
                    src={prevIcon}
                    alt={prevImageAlt}
                />
                <SwapButton
                    onClick={handleClickNextButton}
                    src={icons.nextArrowIcon}
                    alt={nextImageAlt}
                />
            </ButtonsWrap>
            <PopupTableCells
                fillData={yearData}
                handleSelectElement={handleSelectYear}
                changeType={changeType}
                activeId={year}
            />
        </YearSection>
    )
})

export default memo(YearCalendar)
