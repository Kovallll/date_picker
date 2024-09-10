import { forwardRef, memo, useState } from 'react'

import { nextImageAlt, prevImageAlt } from './config'
import { Buttons, Container } from './styled'
import { YearCalendarProps } from './types'

import { SwapButton } from '@components/SwapButton'
import TwelvePicker from '@components/TwelvePicker'
import { icons } from '@constants'

const YearCalendar = forwardRef(function YearCalendar(
    { year, handleSelectYear }: YearCalendarProps,
    ref: React.ForwardedRef<HTMLElement | null>
) {
    const countElementInTable = 12
    const remain = year % countElementInTable

    const initialYearData = (year: number) => {
        const yearData = [
            ...Array(countElementInTable)
                .fill({})
                .map((_, index) =>
                    String(year - Math.ceil(remain / 2) + index)
                ),
        ]
        return yearData
    }

    const [currentYear, setCurrentYear] = useState(year)
    const [yearData, setYearData] = useState(initialYearData(currentYear))

    const isDisabled =
        currentYear - countElementInTable <= 0 ||
        currentYear === countElementInTable

    const handleClickNextButton = () => {
        setCurrentYear((prev) => prev + countElementInTable)
        setYearData(initialYearData(currentYear + countElementInTable))
    }

    const handleClickPrevButton = () => {
        if (!isDisabled) {
            setCurrentYear((prev) => prev - countElementInTable)
            setYearData(initialYearData(currentYear - countElementInTable))
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
            <TwelvePicker
                fillData={yearData}
                handleSelectElement={handleSelectYear}
            />
        </Container>
    )
})

export default memo(YearCalendar)
